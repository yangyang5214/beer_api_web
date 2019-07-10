/**
 * api接口统一管理
 */
import {get, post} from './http'

export const daily_photo_url = '/daily/photo/randomSeq';
// export const upload_photo_url = 'https://api.hexianwei.com/beer/api/upload/image';
export const upload_photo_url = 'http://127.0.0.1:8888/beer/api/upload/image';


export const dailyPhoto = url => get(url, '');
export const underLineToCamelCase = p => get("/underLineToCamelCase", p);
export const jrebelLicense = p => get("/jrebel", p);

