import { Listing } from "../../../../../../types/Listing";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

const REVALIDATE_SECONDS = 10 * 60;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const listingId = (await params).id;
    const baseURL = new URL(
      `https://nestiolistings.com/api/v2/listings/${listingId}`
    );
    const BASIC_AUTH_HEADER =
      "Basic " + Buffer.from(process.env.BASIC_AUTH!).toString("base64");

    const response = await fetch(baseURL.toString(), {
      headers: {
        Accept: "application/json",
        Authorization: BASIC_AUTH_HEADER,
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Listing not found" },
          { status: 404 }
        );
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Listing = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Listing:", error);
    return NextResponse.json(
      { error: "Failed to fetch Listing details" },
      { status: 500 }
    );
  }
}
