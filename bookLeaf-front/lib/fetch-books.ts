export async function fetchSearchBooks(query: string, page: string = "1") {
    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        //console.log('Fetching revenue data...');
        //await new Promise((resolve) => setTimeout(resolve, 3000));
        if (parseInt(page) > 10) {
            page = "1";
        }
        const startIndex = (parseInt(page) - 1) * 20; // Assuming 20 results per page

        const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&startIndex=${startIndex}`,
            {},
        );
        const data = await res.json();

        // console.log('Data fetch completed after 3 seconds.');

        console.log(data);

        return data;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch revenue data.");
    }
}

export async function fetchBookDetailsFromIdVolume(id: string) {
    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        //console.log('Fetching revenue data...');
        //await new Promise((resolve) => setTimeout(resolve, 3000));

        const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes/${id}`,
            {},
        );
        const data = await res.json();

        // console.log('Data fetch completed after 3 seconds.');

        console.log(data);

        return data;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch revenue data.");
    }
}
