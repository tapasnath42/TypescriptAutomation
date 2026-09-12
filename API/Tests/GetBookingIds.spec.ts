import {test, expect} from "@playwright/test";



/*
test("Booking - GetBookingIds", async ({request})=>{
        const response = await request.get("https://restful-booker.herokuapp.com/booking");

        const jsonResponse = await response.json();
        const bookingIds = jsonResponse as { bookingid: number }[];
        const bookingIdToFind = 2;

        console.log(`Total booking IDs: ${bookingIds.length}`);
        console.log(`Booking ID ${bookingIdToFind} present: ${bookingIds.some(({ bookingid }) => bookingid === bookingIdToFind)}`);

        expect(bookingIds.length).toBeGreaterThan(0);
        expect(bookingIds.map(({ bookingid }) => bookingid)).toContain(bookingIdToFind);

});*/

test("Booking - GetBookingIds", async ({request})=>{
        const response = await request.get("https://restful-booker.herokuapp.com/booking");

        const jsonResponse = await response.json();
        let responseArray = Array.from(jsonResponse);
        console.log(responseArray.length);
        
        
         const set = new Set<number>();
        // let obj = responseArray[1];
        // console.log(obj.bookingid);

        for(let i=0; i<10;i++){
                let obj = responseArray[0];
                console.log(obj["bookinigid"]);
                //set.add(obj.bookingid);
        }
        console.log(set);
        
        
        // const set = new Set();

        // for(let i=0; i<responseArray.length; i++){
        //     set.add(responseArray[i]);
        // }

        // console.log(set.has(3));
        
        

        
        
       /* const bookingIds = (jsonResponse as { bookingid: number }[]).map(({ bookingid }) => bookingid);
        const bookingIdToFind = 2;
        console.log(bookingIds);
        console.log(`Total booking IDs: ${bookingIds.length}`);
        console.log(`Booking ID ${bookingIdToFind} present: ${bookingIds.includes(bookingIdToFind)}`);

        expect(bookingIds.length).toBeGreaterThan(0);
        expect(bookingIds).toContain(bookingIdToFind);*/
       
});