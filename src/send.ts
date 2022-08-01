 import amqp from "amqplib/callback_api";

 export function send(){

    amqp.connect('amqp://localhost',(err : any,connection : any) => {
    if(err) {
        console.log(err)
    } else {
        connection.createChannel((err : any,channel : any)=>{
            if(err){
                console.log(err)
            } else {
                console.log('channel created from sender');

                var queue  : string = 'test'
                var msg : string = 'first msg'

                channel.assertQueue(queue,{
                    durable : false
                });

                channel.sendToQueue(queue,Buffer.from(msg));
                console.log("msg sent from sender");
            }
        })
    }
 })
 } 