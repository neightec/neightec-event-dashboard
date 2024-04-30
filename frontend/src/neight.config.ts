import { InjectionToken } from '@angular/core';
import { LogLevelDesc} from 'loglevel';

export const NEIGHT_CONFIG = new InjectionToken<NeightConfiguration>('NEIGHT_CONFIG');

export class NeightConfiguration { 
    production: boolean;
    api_url: string;
}
