import got from "got";

export const getExchange = async (currency) => {
    try {
        let res = await got.get('https://v6.exchangerate-api.com/v6/d237cfe10f8eaeb420db3e8f/latest/USD').json();
        return res.conversion_rates[currency];
    } catch (error) {
        console.error(error);
    }
}