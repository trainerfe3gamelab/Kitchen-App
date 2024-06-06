import axios from "axios";

const additionalInfo = async () => {
    if (!localStorage.getItem("additionalInfo")) {
        try {
            const k = await axios.get("/kategori/1");
            const b = await axios.get("/bahan/1");
            const additionalInfo = { kategori: k.data.kategori, bahan: b.data.bahan };
            localStorage.setItem("additionalInfo", JSON.stringify(additionalInfo));
            return JSON.parse(localStorage.getItem("additionalInfo"));
        } catch (error) {
            console.error(error);
            throw error;
        }
    } else {
        return JSON.parse(localStorage.getItem("additionalInfo"));
    }
}

export { additionalInfo };