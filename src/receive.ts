import amqp from "amqplib/callback_api";

export function receive(){

    amqp.connect("amqp://localhost",(err : any,connection : any)=>{
    if(err){
        console.log(err);
    } else {
        connection.createChannel((err : any, channel : any)=>{
            if (err) {
                console.log(err);
            } else {
                
                var queue  : string = 'test'

                channel.assertQueue(queue,{
                    durable : false
                });

                console.log('waiting for msg from receiver');

                channel.consume(queue,(msg : any)=>{
                    console.log("%s received from receiver", msg.content.toString())
                },{
                    noAck : true
                })
            }
        })
    }
})
} 

