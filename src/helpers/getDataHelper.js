import { getData } from "../services/ServerApi";

export const getDataHelper = async (setItemData) => {
    try {
        const itemInfo = await getData();
        if (itemInfo.success && itemInfo.data) {
            setItemData(itemInfo.data.list);
        } else {
            console.error("No data available");
        }
    } catch (e) {
        console.error(e);
    }
};
