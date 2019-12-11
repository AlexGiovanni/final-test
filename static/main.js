

//messages button 
$(".msg_send_btn").on("click", function(){
    //get info
    var msg = $(".write_msg").val();
    console.log("message: "+msg);
    $(".write_msg").val(' ');
    //post msg to database


    $.ajax({
        url: '/update_message',
        method: 'POST',
        data: {
            message: msg
        }
    }) 
});








