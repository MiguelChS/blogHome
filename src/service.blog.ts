import { IProps as IPropsPost } from 'blg-post';

export const mapPost = (): IPropsPost | null => {
    let mapPropertie: IPropsPost | null = null;
    mapPropertie = {
        dateString: window.dataBlogPage.data.dateString,
        detalle: window.dataBlogPage.data.detalle,
        urlImage: window.dataBlogPage.data.urlImage
    }
    return mapPropertie;
}