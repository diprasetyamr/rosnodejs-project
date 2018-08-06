var express = require('express');
var router = express.Router();
var rosnodejs = require('rosnodejs');

const std_msgs = rosnodejs.require('std_msgs').msg;
//const mobile_robot = rosnodejs.require('mobile_robot').msg;
//const motor = rosnodejs.require('motor').msg;
const geometry_msgs = rosnodejs.require('geometry_msgs').msg;

function talker() {
  // Register node with ROS master
  rosnodejs.initNode('/nodejs_node')
    .then((rosNode) => {

      //let pub = rosNode.advertise('/chatter', std_msgs.String);

      //Location of the robot
      let robotLocation = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
          rosnodejs.log.info('Y: [' + data.pose.position.y.toString() + ']');
        }
      );

      let aSpeedM1 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let aSpeedM2 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let aSpeedM3 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let aSpeedM4 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let tSpeedM1 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let tSpeedM2 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let tSpeedM3 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let tSpeedM4 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let tM1 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let tM2 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let tM3 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      let tM4 = rosNode.subscribe('/slam_out_pose', geometry_msgs.PoseStamped,
        (data) => { // define callback execution
          rosnodejs.log.info('X: [' + data.pose.position.x.toString() + ']');
        }
      );

      // Define a function to execute every 100ms
      // setInterval(() => {
      //   // Construct the message
      //   msg.data = 'hello world ' + count;
      //   msg2.data = 'hello world2 ' + count;
      //   // Publish over ROS
      //   pub.publish(msg);
      //   pub2.publish(msg2);
      //   // Log through stdout and /rosout
      //   //rosnodejs.log.info('I said: [' + msg.data + ']');
      //   ++count;
      // }, 100);
    });
}

talker();

module.exports = router;
