import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

export const resetDB = async () => {
  const safeToReset = process.env.NODE_ENV === "test";
  if (!safeToReset) {
    console.log("WARNING: database reset unavailable outside test env");
    return;
  }

  const { fakeShows, fakeBands, fakeReservations, fakeUsers } =
    await readFakeData();
  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
