/*
 * Serve content over a socket
 */

module.exports = function (socket) {
  socket.emit('send:name', {
    ver: socket.id
  });

  // setInterval(function () {
  //   socket.emit('send:time', {
  //     time: (new Date()).toString()
  //   });
  // }, 1000);
};
