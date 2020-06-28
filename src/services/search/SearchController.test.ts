import { getPlaces } from "./providers/OpenCageDataProvider";

jest.mock("./providers/OpenCageDataProvider");

describe("SearchController", () => {
    test("an empty query string", async () => {
        var returnObj = {
            features: []
        };

        (getPlaces as any).mockImplementation(() => returnObj)
        const result = await getPlaces("");
        expect(result).toEqual({ features: [] });
    });
});