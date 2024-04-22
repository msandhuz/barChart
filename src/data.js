export const rawData = [
    // February data
    { name: "Ifrah Dar", pm: "Ahmer Syed", dates: ["14th Feb"], month: "February" },
    { name: "Bakhtiar", pm: "Haris Mahmood", dates: ["14th Feb", "20th Feb"], month: "February" },
    { name: "Zara", pm: "Haris Mahmood", dates: ["14th Feb"], month: "February" },
    { name: "Fatima Mehmood", pm: "Arham", dates: ["14th Feb"], month: "February" },
    { name: "Imran Farid Khan", pm: "Rabia", dates: ["14th Feb"], month: "February" },
    { name: "Rabia", pm: "khayyam", dates: ["15th Feb"], month: "February" },
    { name: "Hamza Farooq", pm: "saad.nasim", dates: ["16th Feb"], month: "February" },
    { name: "saqib", pm: "khayyam", dates: ["16th Feb"], month: "February" },
    { name: "Rooma Ansar", pm: "Bilal Ahmad", dates: ["16th Feb"], month: "February" },
    { name: "Saad", pm: "Arham", dates: ["16th Feb"], month: "February" },
    { name: "شجاع الرحمان بیگ", pm: "Rabia", dates: ["16th Feb"], month: "February" },
    { name: "Maliha Habib", pm: "Kumail", dates: ["16th Feb"], month: "February" },
    { name: "Aamir Shahzad Hashmi", pm: "Syed Atif Mehdi", dates: ["19th Feb"], month: "February" },
    { name: "Haris Riaz", pm: "Bilal Ahmad", dates: ["19th Feb"], month: "February" },
    { name: "Saddam", pm: "Bilal Ahmad", dates: ["19th Feb"], month: "February" },
    { name: "Ibrahim Nadir", pm: "sidra b", dates: ["19th Feb"], month: "February" },
    { name: "Rabia", pm: "khayyam", dates: ["19th Feb"], month: "February" },
    { name: "Isaac", pm: "Dania Ahmad", dates: ["19th Feb"], month: "February" },
    { name: "Jawad (He/Him)", pm: "Bilal Ahmad", dates: ["19th Feb"], month: "February" },
    { name: "Muhammad Usman Ghani", pm: "Faizan Zia", dates: ["19th Feb"], month: "February" },
    { name: "zainab.mujahid", pm: "Junaid Ahmad", dates: ["20th Feb"], month: "February" },
    { name: "Haj.Zahid", pm: "Junaid Ahmad", dates: ["20th Feb"], month: "February" },
    { name: "Najeeb Ul Hassan", pm: "Rabia", dates: ["21st Feb"], month: "February" },
    { name: "Usama Chaudhary", pm: "Aiman Azhar", dates: ["21st Feb"], month: "February" },
    { name: "Bismillah Jan", pm: "Ibrahim Nadir", dates: ["21st Feb"], month: "February" },
    { name: "Ibrahim Nadir", pm: "sidra b", dates: ["21st Feb"], month: "February" },
    { name: "Jawad (He/Him)", pm: "Bilal Ahmad", dates: ["21st Feb"], month: "February" },
    { name: "mehwish.fatima", pm: "Rabia", dates: ["21st Feb"], month: "February" },
    { name: "Minahil Yaser", pm: "Adeel Qayyum", dates: ["22nd Feb"], month: "February" },
    { name: "Nimra Zaheer", pm: "Syed Atif Mehdi", dates: ["22nd Feb"], month: "February" },
    { name: "Syed Atif Mehdi", pm: "saqib", dates: ["23rd Feb"], month: "February" },
    { name: "Rizwan", pm: "saqib", dates: ["23rd Feb"], month: "February" },
    { name: "Usama A. Ashraf", pm: "Bilal Ahmad", dates: ["23rd Feb"], month: "February" },
    { name: "Saddam", pm: "Bilal Ahmad", dates: ["27th Feb"], month: "February" },
    { name: "Usman Tariq", pm: "Aiman Azhar", dates: ["27th Feb"], month: "February" },
    { name: "mehwish.fatima", pm: "Rabia", dates: ["28th Feb"], month: "February" },
    { name: "haziq.ali", pm: "Bilal Ahmad", dates: ["28th Feb"], month: "February" },
    { name: "Bilal Hyder", pm: "Aiman Azhar", dates: ["29th Feb"], month: "February" },
    { name: "mehwish.fatima", pm: "Rabia", dates: ["29th Feb"], month: "February" },
    { name: "Hamna Waseem", pm: "Bilal Ahmad", dates: ["29th Feb"], month: "February" },
    // March data
    { name: "Rabia", pm: "khayyam", dates: ["1st March"], month: "March" },
    { name: "شجاع الرحمان بیگ", pm: "Rabia", dates: ["4th March"], month: "March" },
    { name: "Nimra Zaheer", pm: "saqib", dates: ["4th March"], month: "March" },
    { name: "Kumail", pm: "Rabia", dates: ["4th March"], month: "March" },
    { name: "Yasir", pm: "Rabia", dates: ["4th March"], month: "March" },
    { name: "شجاع الرحمان بیگ", pm: "Bilal Ahmad", dates: ["5th March"], month: "March" },
    { name: "Saad", pm: "Arham", dates: ["5th March"], month: "March" },
    { name: "Rozina", pm: "Aiman Azhar", dates: ["5th March"], month: "March" },
    { name: "Hamna Waseem", pm: "Bilal Ahmad", dates: ["5th March"], month: "March" },
];

export function transformData(rawData) {
    const months = rawData.reduce((acc, item) => {
        const { name, pm, dates, month } = item;
        if (!acc[month]) {
            acc[month] = [];
        }
        let person = acc[month].find(p => p.name === `${name} (${pm})`);
        if (!person) {
            person = { name: `${name} (${pm})`, absences: dates.length, dates: dates.join(", ") };
            acc[month].push(person);
        } else {
            person.dates += ", " + dates.join(", ");
            person.absences += dates.length;
        }
        return acc;
    }, {});
    return months;
}

export default rawData;
