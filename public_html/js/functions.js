function snapShot() {
    if (localStream) {
        ctxPIC.drawImage(canvas, 0, 0);}
    snapShotControler = true;
}

function donwloadImage() {
  if (snapShotControler === false)
      return alert("Take e picture first");
  else {
     var imag = canvas.toDataURL("image/jpeg");
     imag = imag.replace("image/jpeg", "image/octet-stream");
     document.location = imag;};
}


function downloadVideo(){
    alert("not implemented yet");
    //not implemented yet
}

function drawVideoFrame() {
   requestAnimationFrame(drawVideoFrame);
   ctx.drawImage(video, 0, 0);
};
   requestAnimationFrame(drawVideoFrame);


function drawRemoteVideoFrame() {
    requestAnimationFrame(drawRemoteVideoFrame);
    ctxPIC.drawImage(remoteVideo, 0, 0);
};
requestAnimationFrame(drawRemoteVideoFrame);




var onCameraFail = function(exception) {
    console.log('Camera did not work.', exception);
};

function startVideoChat() {
    var servers = null;
    
    localPeerConnection = new webkitRTCPeerConnection(servers);
    localPeerConnection.onicecandidate = gotLocalIceCandidate;

    remotePeerConnection = new webkitRTCPeerConnection(servers);
    remotePeerConnection.onicecandidate = gotRemoteIceCandidate;
    remotePeerConnection.onaddstream = gotRemoteStream;
    localPeerConnection.addStream(localStream);
    localPeerConnection.createOffer(gotLocalDescription);
}

function gotLocalDescription(description) {
    localPeerConnection.setLocalDescription(description);
    remotePeerConnection.setRemoteDescription(description);
    remotePeerConnection.createAnswer(gotRemoteDescription);
}

function gotRemoteDescription(description) {
    remotePeerConnection.setLocalDescription(description);
    localPeerConnection.setRemoteDescription(description);
}

function gotRemoteStream(event) {
    remoteVideo.src = URL.createObjectURL(event.stream);
}

function gotLocalIceCandidate(event) {
    if (event.candidate) {
        remotePeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
    }
}

function gotRemoteIceCandidate(event) {
    if (event.candidate) {
        localPeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
      
    }
}

function stopVideoChat(){    
  localPeerConnection.close();
  remotePeerConnection.close();
  localPeerConnection = null;
  remotePeerConnection = null;
}
