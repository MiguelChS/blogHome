import { IPropsPagePost } from './blog';
export { IPropsPagePost };
declare global  {
    interface Window {
        dataBlogPage: {
            page: string;
            data: IPropsPagePost;
        };
    }
}
