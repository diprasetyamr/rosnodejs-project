var express = require('express');
var router = express.Router();
var rosnodejs = require('rosnodejs');

const std_msgs = rosnodejs.require('std_msgs').msg;
const mobile_robot = rosnodejs.require('mobile_robot').msg;

function talker() {
  // Register node with ROS master
  rosnodejs.initNode('/nodejs_node')
    .then((rosNode) => {
      // Create ROS publisher on the 'chatter' topic with String message
      let pub = rosNode.advertise('/chatter', std_msgs.String);
      let pub2 = rosNode.advertise('/chatter2', std_msgs.String);
      let count = 0;
      const msg = new std_msgs.String();
      const msg2 = new std_msgs.String();
      const msg3 = new mobile_robot.velo();

      let sub = rosNode.subscribe('/chatter', std_msgs.String,
        (data) => { // define callback execution
          rosnodejs.log.info('I heard: [' + data.data + ']');
        }
      );

      let sub2 = rosNode.subscribe('/chatter2', std_msgs.String,
        (data) => { // define callback execution
          rosnodejs.log.info('I heard2: [' + data.data + ']');
        }
      );
      // Define a function to execute every 100ms
      setInterval(() => {
        // Construct the message
        msg.data = 'hello world ' + count;
        msg2.data = 'hello world2 ' + count;
        // Publish over ROS
        pub.publish(msg);
        pub2.publish(msg2);
        // Log through stdout and /rosout
        //rosnodejs.log.info('I said: [' + msg.data + ']');
        ++count;
      }, 100);
    });
}

talker();

module.exports = router;
