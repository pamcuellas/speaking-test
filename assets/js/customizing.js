/*jshint esversion: 6 */

$(document).ready( function() { 	// Wait until DOM be ready to start.

    var sctructure = [
    {qNumber:1, 
        qName:"Giving Advice",
        qPreparationTime: [0],
        qRecordingTime:3000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:3,
        qImage:["Q1/Q01-1.png","Q1/Q01-2.png","Q1/Q01-3.png"],
        qDescription:"Give me an advice."},
    {qNumber: 2, 
        qName:"Talking about a personal experience",
        qPreparationTime: [9000],
        qRecordingTime:12000, /* 90000*/ 
        qBarrMSGDuration:9,
        qBarrPrepDuration:3,
        qImage:["Q2/Q02-1.png","Q2/Q02-2.png","Q2/Q02-3.png"],
        qDescription:"Speak about the best day of work you have ever had."},
    {qNumber: 3, 
        qName:"Describing a scene",
        qPreparationTime: [21000],
        qRecordingTime:24000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:3,
        qImage:["Q3/Q03-1.png","Q3/Q03-2.png","Q3/Q03-3.png"],
        qDescription:"Speak about the best day of work you have ever had."},
    {qNumber: 4, 
        qName:"Making Predictions",
        qPreparationTime: [30000],
        qRecordingTime:33000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:3,
        qImage:["Q4/Q04-1.png","Q4/Q04-2.png","Q4/Q04-3.png"],
        qDescription:"Give me the next lottery numbers."},
    {qNumber: 5, 
        qName:"Comparing and persuading",
        qPreparationTime: [39000, 45000],
        qRecordingTime:51000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:6,
        qImage:["Q5/Q05-1-A.png","Q5/Q05-2-A.png","Q5/Q05-3-A.png"],
        qDescription:"Try to convince me."},
    {qNumber: 6, 
        qName:"Dealing with a difficult situation",
        qPreparationTime: [57000],
        qRecordingTime:63000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:6,
        qImage:["Q6/Q06-1.png","Q6/Q06-2.png","Q6/Q06-3.png"],
        qDescription:"Try to convince me."},
    {qNumber: 7, 
        qName:"Expressing opinions",
        qPreparationTime: [69000],
        qRecordingTime:72000,
        qBarrMSGDuration:9,
        qBarrPrepDuration:3,
        qImage:["Q7/Q07-1.png","Q7/Q07-2.png","Q7/Q07-3.png"],
        qDescription:"What to you thing about Donald Trump."},
    {qNumber: 8, 
        qName:"Describing an unusual situation",
        qPreparationTime: [81000],
        qRecordingTime:84000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:3,
        qImage:["Q8/Q08-1.png","Q8/Q08-2.png","Q8/Q08-3.png"],
        qDescription:"Tell me about your mother-in-law."}
    ];

    var rootDirImage = "./assets/images/";
    let pos = 0;
    let posImageQ3 = 0;   
    $( ".progress-bar" ).css({ animationName:"none", width:"0%"});

    sctructure.forEach( ( value, index ) =>  {
        /* Set Preparation Time */ 
        setTimeout( () => {
            pos = Math.floor(Math.random() * value.qImage.length);
            $(".msg").text("");
            $(".title").text("Question number " + value.qNumber);

            $(".progress-bar").css({ animationName:"none", width:"0%"});

            if (value.qNumber != 4) {
                $("#image").prop("src", rootDirImage + value.qImage[pos]);
            } else {
                /* Question 4 - Must corresponding to image question 3 */
                $("#image").prop("src", rootDirImage + value.qImage[posImageQ3]);
            }

            /* Load image 3 position in array to be used on image 4 */ 
            posImageQ3 =  pos;

        }, value.qPreparationTime[0]);

        /* Question 5 - customized */
        if (value.qNumber === 5) {
            setTimeout( () => {
                let image = value.qImage[pos].replace("A","B");
                $("#image").prop("src", rootDirImage + image);
            }, value.qPreparationTime[1]);
        }

        /* Set Recording Time */
        // setTimeout( () => {  
        //     var a = 1;
        //     $(".msg").text("Start speaking now !!!"); 
        // }, value.qRecordingTime-10 ) ;
        
        setTimeout( () => {
            $(".msg").text("Start speaking now !!!"); 
            // $( ".progress-bar" ).css({ animationName:"none"});
            $( ".progress-bar" ).css({animationName:"barr", width:"100%", animationDuration: value.qBarrMSGDuration + "s"});
        }, value.qRecordingTime);
    });

// test();

} );

