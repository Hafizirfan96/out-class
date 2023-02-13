import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
import QuizModal from "./QuizModal";

import { useDispatch, useSelector } from "react-redux";

//redux actions
import { setQuizModalVisibility } from "../../store/ui/quizModal";
import {
  setCurrentQuiz,
  resetCurrentQuiz,
} from "../../store/entities/currentQuiz";

import { markVideoWatched } from "../../store/api/lessons";
import { saveActivity } from "../../store/api/courses";

let activitySavingInterval;
const VideoPlayer = loadable(
  () => import("../../components/Video/VideoPlayer"),
  {
    ssr: false,
  }
);

let videoPlayerRef;

export default (props) => {
  const {
    currentLesson,
    moveToNextLesson,
    moveToPrevLesson,
    setWatched,
    courseId,
    lessonId,
  } = props;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
console.log("video path", currentLesson.newVideo)
console.log("bulk ", currentLesson.isBulk)
  const videoSources = (
    (currentLesson.videoQualities &&
      currentLesson.videoQualities.sort().reverse()) ||
    []
  ).map((vq) => {
    console.log("verify old" , vq)


    return {
 
      src: currentLesson.video.replace("playlist.m3u8", vq + "p.m3u8"),
      label: vq + "P",
      //   selected: true,
      type: "application/x-mpegURL",
      withCredentials: false,
    };
  });
  const videoSourcesNew = (
    (currentLesson.videoQualities &&
      currentLesson.videoQualities.sort().reverse()) ||
    []
  ).map((vq) => {
   
    if(vq=== "360"){
      console.log("360",currentLesson.newVideo.replace("playlist.m3u8", "playlist400K/400K.ts.m3u8"))
      return {
        src: currentLesson.newVideo.replace("playlist.m3u8", "playlist400K/400K.ts.m3u8"),
        
        // src: currentLesson.newVideo.replace("playlist.m3u8", vq + "p.m3u8"),
        label: vq + "P",
        //   selected: true,
        type: "application/x-mpegURL",
        withCredentials: false,
      };
    }else if(vq=== "480"){
      return {
        
        src: currentLesson.newVideo.replace("playlist.m3u8","playlist1000K/1000K.ts.m3u8"),
        
        // src: currentLesson.newVideo.replace("playlist.m3u8", vq + "p.m3u8"),
        label: vq + "P",
        //   selected: true,
        type: "application/x-mpegURL",
        withCredentials: false,
      };
    }else if(vq=== "720"){
      return {
        src: currentLesson.newVideo.replace("playlist.m3u8", "playlist1.5M/1.5M.ts.m3u8"),
        
        // src: currentLesson.newVideo.replace("playlist.m3u8", vq + "p.m3u8"),
        label: vq + "P",
        //   selected: true,
        type: "application/x-mpegURL",
        withCredentials: false,
      };
    }else  if(vq=== "1028"){
      return {
        src: currentLesson.newVideo.replace("playlist.m3u8", "playlist2M/2M.ts.m3u8"),
        
        // src: currentLesson.newVideo.replace("playlist.m3u8", vq + "p.m3u8"),
        label: vq + "P",
        //   selected: true,
        type: "application/x-mpegURL",
        withCredentials: false,
      };
    }
  });

  ///save activity after 5 seconds
  useEffect(() => {
    activitySavingInterval = setInterval(() => {
      if (!videoPlayerRef) return;
      const duration = videoPlayerRef.getCurrentDuration();

      dispatch(
        saveActivity({
          body: {
            course: courseId,
            lesson: lessonId,
            duration,
          },
        })
      );
    }, 5000);

    return () => {
      if (activitySavingInterval) clearInterval(activitySavingInterval);
    };
  }, []);

  const [popedQuizzes, setPoppedQuizes] = useState([]);
  let quizPopupInterval = null;
  useEffect(() => {
    quizPopupInterval = setInterval(() => {
      if (!videoPlayerRef) return;
      if (videoPlayerRef.paused()) return;
      const videoDuration = videoPlayerRef.getCurrentDuration();
      const popUpTime = secondsToTime(videoDuration);

      const quiz = currentLesson.quizzes.find((q) => {
        return q.showInVideoTime === popUpTime;
      });

      if (quiz && popedQuizzes.findIndex((pq) => pq === quiz._id) === -1) {
        popedQuizzes.push(quiz._id);
        setPoppedQuizes(popedQuizzes);
        videoPlayerRef.pause();
        videoPlayerRef.exitFullScreen();

        dispatch(setCurrentQuiz(quiz));
        dispatch(setQuizModalVisibility(true));
      }
    }, 1000);
    return () => {
      clearInterval(quizPopupInterval);
    };
  }, []);

  const onQuizComplete = () => {
    dispatch(setQuizModalVisibility(false));
    if (!videoPlayerRef) return;
    videoPlayerRef.play();
  };

  let waterMarkText = "";

  if (user) {
    waterMarkText = `${user.firstName} ${user.lastName} (${user.email})`;
  }

  return (
<>
{currentLesson.isBulk===true ? (
  <div className="w-100">
  <VideoPlayer
    sources={videoSourcesNew}
    // sources={currentLesson.newVideo.replace("playlist.m3u8", "playlist400K/400K.ts.m3u8")}
    
    ref={(ref) => {
      videoPlayerRef = ref;
    }}
    playbackRates={[0.75, 1, 1.25, 1.5, 1.75]}
    waterMarkText={waterMarkText}
    captions={currentLesson.videoCaptions}
    onVideoEnd={() => {
      try {
        if (moveToNextLesson) moveToNextLesson();

        dispatch(
          markVideoWatched({
            body: { course: courseId, lesson: lessonId },
            onError: () => {},
          })
        );
        if (setWatched) setWatched({ courseId, lessonId });
      } catch (err) {
        console.log("VIDEO END ERR", err);
      }
    }}
    onPrev={() => {
      if (moveToPrevLesson) moveToPrevLesson();
    }}
    onNext={() => {
      if (moveToNextLesson) moveToNextLesson();
    }}
  />
  <QuizModal onComplete={onQuizComplete} />
</div>
):(
<div className="w-100">
      <VideoPlayer
        sources={videoSources}
        // sources={currentLesson.newVideo.replace("playlist.m3u8", "playlist400K/400K.ts.m3u8")}
        
        ref={(ref) => {
          videoPlayerRef = ref;
        }}
        playbackRates={[0.75, 1, 1.25, 1.5, 1.75]}
        waterMarkText={waterMarkText}
        captions={currentLesson.videoCaptions}
        onVideoEnd={() => {
          try {
            if (moveToNextLesson) moveToNextLesson();

            dispatch(
              markVideoWatched({
                body: { course: courseId, lesson: lessonId },
                onError: () => {},
              })
            );
            if (setWatched) setWatched({ courseId, lessonId });
          } catch (err) {
            console.log("VIDEO END ERR", err);
          }
        }}
        onPrev={() => {
          if (moveToPrevLesson) moveToPrevLesson();
        }}
        onNext={() => {
          if (moveToNextLesson) moveToNextLesson();
        }}
      />
      <QuizModal onComplete={onQuizComplete} />
    </div>
)}


</>
  );
};

const secondsToTime = (seconds = 0) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
};
