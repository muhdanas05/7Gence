// Single source of truth for the business identity shown on the footer, Contact,
// Terms and Privacy pages. It must match the A2P brand registration and the IRS
// EIN letter word for word, so change it here and nowhere else.
export const BUSINESS = {
    legalName: "7Gence LLC",
    smsProgramName: "7Gence Appointment Updates",
    email: "anas@7gence.com",
    // Principal office exactly as filed in the Wyoming Articles of Organization.
    address: {
        line1: "30 N Gould St Ste R",
        city: "Sheridan",
        state: "WY",
        zip: "82801",
    },
    // Support line for calls and SMS HELP (Telnyx, Wyoming 307). Calls forward to the
    // founder's phone. The pages render a phone line only when this is set.
    phone: "+13072068827",
    phoneDisplay: "(307) 206-8827",
} as const;

export const BUSINESS_ADDRESS_ONE_LINE = `${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`;
