import { isArray } from './predicates';

export const getLowercaseArray = (value: string | string[]): string[] => {
    if (isArray(value)) {
        return value.map((val: string) => val.toLowerCase());
    }
    return value.toLowerCase().split(/\s*,\s*/);
};

export const getArray = (value: string | string[]): string[] => {
    if (isArray(value)) {
        return value;
    }
    return [value];
};

export const randomId = (): string => Math.random().toString(16).slice(2);