/**
 * api接口统一管理
 */
import {get, post} from './http'

export const daily_photo_url = '/daily/photo/randomSeq';


export const dailyPhoto = url => get(url, '');
export const underLineToCamelCase = p => get("/underLineToCamelCase", p);

