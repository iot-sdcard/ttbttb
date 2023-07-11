const express = require("express");
const router = express.Router();
const transcriptionController = require("../controllers/transcriptionController");

// /transcribe 엔드포인트에 POST 요청을 처리하는 라우터

router.post('/', transcriptionController.createTranscription);
router.get('/transcriptions', transcriptionController.getTranscriptions);

router.post("/", transcriptionController.createTranscription);

// 버튼 누르기 테스트
router.get("/test", async (req, res) => {
  try {
    const params = req.query;
    console.log(params);
    const result = "test successed";

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 녹음 시작
router.get("/recStart", async (req, res) => {
  try {
    const params = req.query;
    console.log(params);
    const result = "recStart-success";

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 녹음 종료
router.get("/recEnd", async (req, res) => {
  try {
    const params = req.query;
    console.log(params);
    const result = "recEnd-success";

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// DB 넣기
router.get("/continueYes", async (req, res) => {
  try {
    const params = req.query;
    console.log(params);
    const result = "dbsave-success";

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 저장하지 않기
router.get("/continueNo", async (req, res) => {
  try {
    const params = req.query;
    console.log(params);
    const result ="discard-success";

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 끝내고 파일로 만들기
router.get("/saveFile", async (req, res) => {
  try {
    const params = req.query;
    console.log(params);
    const result = "file-success";

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});


module.exports = router;
