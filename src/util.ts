export const extendClass = (base: { prototype: any; }, extension: { prototype: any; }) => {
    for (const name of Object.getOwnPropertyNames(extension.prototype)) {
        Object.defineProperty(base.prototype, name, Object.getOwnPropertyDescriptor(extension.prototype, name) || Object.create(null));
    }
};
