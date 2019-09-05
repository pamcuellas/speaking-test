/*jshint esversion: 6 */

$(document).ready( function() { 	// Wait until DOM be ready to start.

    const sctructure = [
    {qNumber:1, 
        qName:"Give an Advice",
        qPreparationTime: [0],
        qRecordingTime:3000,
        qBarrMSGDuration:9,
        qBarrPrepDuration:3,
        qImage:["Q1/Q01-1.png","Q1/Q01-2.png","Q1/Q01-3.png"],
        qDescription:"Give me an advice."},
    {qNumber: 2, 
        qName:"Talk about a personal experience",
        qPreparationTime: [12000],
        qRecordingTime:15000,  
        qBarrMSGDuration:9,
        qBarrPrepDuration:3,
        qImage:["Q2/Q02-1.png","Q2/Q02-2.png","Q2/Q02-3.png"],
        qDescription:"Speak about the best day of work you have ever had."},
    {qNumber: 3, 
        qName:"Describe this scene",
        qPreparationTime: [24000],
        qRecordingTime:27000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:3,
        qImage:["Q3/Q03-1.png","Q3/Q03-2.png","Q3/Q03-3.png"],
        qDescription:"Speak about the best day of work you have ever had."},
    {qNumber: 4, 
        qName:"Make Predictions",
        qPreparationTime: [33000],
        qRecordingTime:36000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:3,
        qImage:["Q4/Q04-1.png","Q4/Q04-2.png","Q4/Q04-3.png"],
        qDescription:"Give me the next lottery numbers."},
    {qNumber: 5, 
        qName:"Compare and persuade",
        qPreparationTime: [42000, 48000],
        qRecordingTime:54000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:6,
        qImage:["Q5/Q05-1-A.png","Q5/Q05-2-A.png","Q5/Q05-3-A.png"],
        qDescription:"Try to convince me."},
    {qNumber: 6, 
        qName:"Deal with a difficult situation",
        qPreparationTime: [60000],
        qRecordingTime:66000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:6,
        qImage:["Q6/Q06-1.png","Q6/Q06-2.png","Q6/Q06-3.png"],
        qDescription:"Try to convince me."},
    {qNumber: 7, 
        qName:"Opinion",
        qPreparationTime: [72000],
        qRecordingTime:75000,
        qBarrMSGDuration:9,
        qBarrPrepDuration:3,
        qImage:["Q7/Q07-1.png","Q7/Q07-2.png","Q7/Q07-3.png"],
        qDescription:"What to you thing about Donald Trump."},
    {qNumber: 8, 
        qName:"Describing an unusual situation",
        qPreparationTime: [84000],
        qRecordingTime:87000,
        qBarrMSGDuration:6,
        qBarrPrepDuration:3,
        qImage:["Q8/Q08-1.png","Q8/Q08-2.png","Q8/Q08-3.png"],
        qDescription:"Tell me about your mother-in-law."}
    ];


    // const sctructure = [
    // {qNumber:1, 
    //     qName:"Give an Advice",
    //     qPreparationTime: [0],
    //     qRecordingTime:30000,
    //     qBarrMSGDuration:90,
    //     qBarrPrepDuration:30,
    //     qImage:["Q1/Q01-1.png","Q1/Q01-2.png","Q1/Q01-3.png"],
    //     qDescription:"Give me an advice."},
    // {qNumber: 2, 
    //     qName:"Talk about a personal experience",
    //     qPreparationTime: [120000],
    //     qRecordingTime:150000,  
    //     qBarrMSGDuration:90,
    //     qBarrPrepDuration:30,
    //     qImage:["Q2/Q02-1.png","Q2/Q02-2.png","Q2/Q02-3.png"],
    //     qDescription:"Speak about the best day of work you have ever had."},
    // {qNumber: 3, 
    //     qName:"Describe this scene",
    //     qPreparationTime: [240000],
    //     qRecordingTime:270000,
    //     qBarrMSGDuration:60,
    //     qBarrPrepDuration:30,
    //     qImage:["Q3/Q03-1.png","Q3/Q03-2.png","Q3/Q03-3.png"],
    //     qDescription:"Speak about the best day of work you have ever had."},
    // {qNumber: 4, 
    //     qName:"Make Predictions",
    //     qPreparationTime: [330000],
    //     qRecordingTime:360000,
    //     qBarrMSGDuration:60,
    //     qBarrPrepDuration:30,
    //     qImage:["Q4/Q04-1.png","Q4/Q04-2.png","Q4/Q04-3.png"],
    //     qDescription:"Give me the next lottery numbers."},
    // {qNumber: 5, 
    //     qName:"Compare and persuade",
    //     qPreparationTime: [420000, 480000],
    //     qRecordingTime:540000,
    //     qBarrMSGDuration:60,
    //     qBarrPrepDuration:60,
    //     qImage:["Q5/Q05-1-A.png","Q5/Q05-2-A.png","Q5/Q05-3-A.png"],
    //     qDescription:"Try to convince me."},
    // {qNumber: 6, 
    //     qName:"Deal with a difficult situation",
    //     qPreparationTime: [600000],
    //     qRecordingTime:660000,
    //     qBarrMSGDuration:60,
    //     qBarrPrepDuration:60,
    //     qImage:["Q6/Q06-1.png","Q6/Q06-2.png","Q6/Q06-3.png"],
    //     qDescription:"Try to convince me."},
    // {qNumber: 7, 
    //     qName:"Express opinion",
    //     qPreparationTime: [720000],
    //     qRecordingTime:750000,
    //     qBarrMSGDuration:90,
    //     qBarrPrepDuration:30,
    //     qImage:["Q7/Q07-1.png","Q7/Q07-2.png","Q7/Q07-3.png"],
    //     qDescription:"What to you thing about Donald Trump."},
    // {qNumber: 8, 
    //     qName:"Describe an unusual situation",
    //     qPreparationTime: [840000],
    //     qRecordingTime:870000,
    //     qBarrMSGDuration:60,
    //     qBarrPrepDuration:30,
    //     qImage:["Q8/Q08-1.png","Q8/Q08-2.png","Q8/Q08-3.png"],
    //     qDescription:"Tell me about your mother-in-law."}
    // ];

    var rootDirImage = "./assets/images/";
    let pos = 0;
    let posImageQ3 = 0;

    function timer( time, currText ) {
        var x = setInterval( () => {
            time -= 1;  
            $("#timer").text(currText + time + "s");
            if (time <= 0) {
                $("#timer").text("");
                clearInterval(x);
            }
        }, 1000);
    }

    sctructure.forEach( ( value ) =>  {

        /* Set Preparation Time */ 
        setTimeout( () => {
            var currText = (value.qNumber != 5) ? "Preparation time: " : "Selection time: ";
            timer( value.qBarrPrepDuration, currText );
            pos = Math.floor(Math.random() * value.qImage.length);
            $(".msg").text("");
            $(".title").text("Question number " + value.qNumber);
            $(".subject").text(value.qName);
            $(".progress-bar").css({animationName:"none", width:"0%"});

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
                timer( value.qBarrPrepDuration, "Preparation time: " );
                let image = value.qImage[pos].replace("A","B");
                $("#image").prop("src", rootDirImage + image);
            }, value.qPreparationTime[1]);
        }
        
        /* Speaking part */ 
        setTimeout( () => {
            $(".msg").text("Start speaking now !"); 
            $( ".progress-bar" ).css({animationName:"barr", width:"100%", animationDuration: value.qBarrMSGDuration + "s"});
        }, value.qRecordingTime);
    });

// test();

} );

