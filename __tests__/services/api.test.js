import { FetchData } from "@/utils/Services";

describe("FetchData", () => {
  it("fetches data from the API", async () => {
    const mockData = {
      articles: [
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "HT News Desk",
          title:
            "Bharti Hexacom IPO allotment, GMP and listing date: Know all about the issue now - Hindustan Times",
          description:
            "Bharti Hexacom IPO allotment, GMP and listing date: Eager investors would be looking forward to know when all this has been planned to happen. Check it out now.",
          url: "https://www.hindustantimes.com/business/bharti-hexacom-ipo-allotment-gmp-and-listing-date-know-all-about-the-issue-now-101712491745797.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2024/04/07/1600x900/Glenmark_Life_Sciences_IPO_1627276521392_1712491971956.jpg",
          publishedAt: "2024-04-07T12:25:59Z",
          content:
            "For stock market investors, the upcoming week is set to be quite interesting. The interest will stem from Bharti Hexacom IPO. Apart from the fact that it is a unit of one of the biggest telecom compa… [+2482 chars]",
        },
      ],
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const data = await FetchData();

    expect(data).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://newsapi.org/v2/top-headlines?country=in&page=2&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
  });
});
