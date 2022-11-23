import "reflect-metadata";

const mapKey = Symbol("map");
const transformKey = Symbol("transform");
const optionalKey = Symbol("optional");

interface TransformFunctions<D, S> {
	serialize: (value: D) => S;
	deserialize: (value: S) => D;
}

export class Serializable {
	toJSON() {
		const keyMaps =
			(Reflect.getMetadata(mapKey, this) as Record<string, string>) ?? {};
		const transformMaps =
			(Reflect.getMetadata(transformKey, this) as Record<
				string,
				TransformFunctions<any, any>
			>) ?? {};
		const optionalMaps =
			(Reflect.getMetadata(optionalKey, this) as Record<string, boolean>) ?? {};
		let output: Record<string, unknown> = {};
		for (const key in keyMaps) {
			let value = this[key];
			// Check if it's optional
			if (value === undefined && optionalMaps[key] === true) continue;
			// Check if we have a transform function
			if (transformMaps[key]) {
				value = transformMaps[key].serialize(value);
			}
			output[keyMaps[key]] = value;
		}
		return output;
	}
	static fromJSON(data: Record<string, any>, object?: any) {
		const obj = object ?? new this();
		const keyMaps = Reflect.getMetadata(mapKey, obj) as Record<string, string>;
		const transformMaps =
			(Reflect.getMetadata(transformKey, obj) as Record<
				string,
				TransformFunctions<any, any>
			>) ?? {};
		const optionalMaps =
			(Reflect.getMetadata(optionalKey, obj) as Record<string, boolean>) ?? {};
		for (const key in keyMaps) {
			let value = data[keyMaps[key]];
			// Check if it's optional
			if (value === undefined && optionalMaps[key] === true) continue;
			// Check if we have a transform function
			if (transformMaps[key]) {
				value = transformMaps[key].deserialize(value);
			}
			obj[key] = value;
		}
		return obj;
	}
}

export function Mapped(to?: string) {
	return (target: any, propertyKey: string) => {
		const oldMeta = Reflect.getMetadata(mapKey, target) || {};
		oldMeta[propertyKey] = to ?? propertyKey;
		Reflect.defineMetadata(mapKey, oldMeta, target);
	};
}

export function Transform<D, S>(
	serialize: (value: D) => S,
	deserialize: (value: S) => D
) {
	return (target: any, propertyKey: string) => {
		const oldMeta = Reflect.getMetadata(transformKey, target) || {};
		oldMeta[propertyKey] = {
			serialize,
			deserialize,
		};
		Reflect.defineMetadata(transformKey, oldMeta, target);
	};
}

export function Optional() {
	return (target: any, propertyKey: string) => {
		const oldMeta = Reflect.getMetadata(optionalKey, target) || {};
		oldMeta[propertyKey] = true;
		Reflect.defineMetadata(optionalKey, oldMeta, target);
	};
}
