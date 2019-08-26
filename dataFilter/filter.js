var fs = require("fs");
var readline = require('readline');

var mysql  = require('mysql');

// var connection = mysql.createConnection({
//     host     : '47.93.226.47',
//     user     : 'hang',
//     password : 'hang!@#',
//     port: '3306',
//     database: 'architect'
// });
dealQuestionDLDX();
function dealQuestionDL() {

    var fRead = fs.createReadStream('高出作业吊篮安装拆卸工（判断）.txt');
    var objReadline = readline.createInterface({
        input: fRead
    });

    var questionObj = {
        questionBankId: '',
        questionTypeId: 3,
        questionTitle: '',
        explanation: "无解析",
        parentId: 0,
        questionBankCategoryId: 15,
        name: "特种工",
        difficultyDegree: 1,
        isClose: 0,
        isDelete: 0,
        answer: [{
            questionItemId: 162996,
            questionBankId: 43612,
            name: "正确",
            result: 0,
            index: 0,
            indexLetter: "A"
        }]
    }
    objReadline.on('line', function (line) {
        // arr.push(line);
        console.log(line.slice(1, 2));
        var indexLetter = line.slice(1, 2);
        var answer = []
        if (indexLetter == 'A'){
            answer = [{
                questionItemId: 162996,
                questionBankId: 43612,
                name: "正确",
                result: 1,
                index: 0,
                indexLetter: "A"
            },
                {
                    questionItemId: 162996,
                    questionBankId: 43612,
                    name: "错误",
                    result: 0,
                    index: 0,
                    indexLetter: "B"
                }]
        }
        if (indexLetter == 'B'){
            answer = [{
                questionItemId: 162996,
                questionBankId: 43612,
                name: "正确",
                result: 0,
                index: 0,
                indexLetter: "A"
            },
                {
                    questionItemId: 162996,
                    questionBankId: 43612,
                    name: "错误",
                    result: 1,
                    index: 0,
                    indexLetter: "B"
                }]
        }
        console.log(answer)
        questionObj['answer'] = answer;
        questionObj['questionTitle'] = line.slice(3);
        console.log(questionObj);
        appendTofile('questionsDL.txt', JSON.stringify(questionObj));
        // var index = line.search('、');
        // console.log(line.slice(4, index));
        // console.log(line.slice(3));
    });
    objReadline.on('close', function () {
        console.log('done');
        // callback(arr);
    });
}


function dealQuestionDLDX() {

    var curQuestion = -1;
    var questionArr = new Array(200);

    var fRead = fs.createReadStream('吊篮(单选).txt');
    var objReadline = readline.createInterface({
        input: fRead
    });

    var questionObj = {
        questionBankId: '',
        questionTypeId: 3,
        questionTitle: '',
        explanation: "无解析",
        parentId: 0,
        questionBankCategoryId: 15,
        name: "特种工",
        difficultyDegree: 1,
        isClose: 0,
        isDelete: 0,
        answer: [{
            questionItemId: 162996,
            questionBankId: 43612,
            name: "正确",
            result: 0,
            index: 0,
            indexLetter: "A"
        }]
    }
    objReadline.on('line', function (line) {
        // arr.push(line);
        // console.log(line.slice(1, 2));
        // var indexLetter = line.slice(1, 2);
        // appendTofile('questionsDL.txt', JSON.stringify(questionObj));
        // var index = line.search('、');
        // console.log(line.slice(4, index));
        // console.log(line.slice(3));
        var numIndex = line.search(/\b\d/);
        if (numIndex == 0){
            // console.log('this is a question: ' + line.split('、')[0]);
            // console.log('this answer is ' + new RegExp(/[ABCD]/).exec(line));
            // console.log(++curQuestion)
            console.log(line.match(/[(][ABCD][)]/))
            questionArr[++curQuestion] = {
                question: line.split('、')[1],
                result: line.match(/[(][ABCD][)]/),
                answer: []
            }
        }else {
            let reg = new RegExp(/\b[ABCD]/g)
            let prevAnswerArr = [];
            let tmp = line.replace(/\s/g, "")

            // console.log('this answer exec ' + reg.exec(line))
            // console.log(reg.lastIndex);
            let result;
            while ((result = reg.exec(line)) != null)  {
                // console.log('result ' + result);
                // console.log('index ' + result.index);
                prevAnswerArr.push({
                    index: result.index,
                    letter: result.input
                })
            }
            // console.log(prevAnswerArr)
            if (prevAnswerArr.length == 0){
                // 格式错误行
                console.log(questionArr[curQuestion])
            }
            let tmpQuestion = questionArr[curQuestion];

            if (prevAnswerArr.length == 1){
                // console.log(prevAnswerArr[0]['index'])
                // console.log(line.slice(prevAnswerArr[0]['index'],-1));

                tmpQuestion['answer'].push({
                    letter: line.slice(prevAnswerArr[0]['index'],prevAnswerArr[0]['index']+1),
                    title: line.slice(prevAnswerArr[0]['index'],line.length)
                });
            }
            if (prevAnswerArr.length == 2){
                // console.log(prevAnswerArr[0]['index'])
                // console.log(prevAnswerArr[1]['index'])
                // console.log(line.slice(prevAnswerArr[0]['index'],prevAnswerArr[1]['index']))
                // console.log(line.slice(prevAnswerArr[1]['index'],-1))

                tmpQuestion['answer'].push({
                    letter: line.slice(prevAnswerArr[0]['index'],prevAnswerArr[0]['index']+1),
                    title: line.slice(prevAnswerArr[0]['index'],prevAnswerArr[1]['index'])
                });
                tmpQuestion['answer'].push({
                    letter: line.slice(prevAnswerArr[1]['index'],prevAnswerArr[1]['index']+1),
                    title: line.slice(prevAnswerArr[1]['index'],line.length)
                });
            }
            if (prevAnswerArr.length == 4){
                // console.log(prevAnswerArr[0]['index'])
                // console.log(prevAnswerArr[1]['index'])
                // console.log(prevAnswerArr[2]['index'])
                // console.log(prevAnswerArr[3]['index'])
                // console.log(line.slice(prevAnswerArr[0]['index'],prevAnswerArr[1]['index']))
                // console.log(line.slice(prevAnswerArr[1]['index'],prevAnswerArr[2]['index']))
                // console.log(line.slice(prevAnswerArr[2]['index'],prevAnswerArr[3]['index']))
                // console.log(line.slice(prevAnswerArr[3]['index'],line.length))

                tmpQuestion['answer'].push({
                    letter: line.slice(prevAnswerArr[0]['index'],prevAnswerArr[0]['index']+1),
                    title: line.slice(prevAnswerArr[0]['index'],prevAnswerArr[1]['index'])
                });
                tmpQuestion['answer'].push({
                    letter: line.slice(prevAnswerArr[1]['index'],prevAnswerArr[1]['index']+1),
                    title: line.slice(prevAnswerArr[1]['index'],prevAnswerArr[2]['index'])
                });
                tmpQuestion['answer'].push({
                    letter: line.slice(prevAnswerArr[2]['index'],prevAnswerArr[2]['index']+1),
                    title: line.slice(prevAnswerArr[2]['index'],prevAnswerArr[3]['index'])
                });
                tmpQuestion['answer'].push({
                    letter: line.slice(prevAnswerArr[1]['index'],prevAnswerArr[1]['index']+1),
                    title: line.slice(prevAnswerArr[1]['index'],line.length)
                });
            }

            questionArr[curQuestion]['answer'] = tmpQuestion['answer']
            console.log(tmpQuestion['answer'],tmpQuestion['answer'].length)
            // console.log('this answer deal ' + tmp.split(/[ABCD]/).length, 'sp' + tmp.split(/[ABCD]/)[1])
        }
        // console.log(line.search(/\b\d/))
    });
    objReadline.on('close', function () {
        console.log('done');
        appendTofile('questionDLQX.json', JSON.stringify(questionArr))
        // console.log(questionArr)
        // callback(arr);
    });
}

function appendTofile(fname,data) {

    fs.open(fname, 'a', function (err, fd) {
        if (err) {
            return console.error(err);
        }

        fs.write(fd, data + '\n', function (err) {
            if (err) {
                console.log(err);
            }
            console.log('文件write成功！');
        });
// 关闭文件
        fs.close(fd, function (err) {
            if (err) {
                console.log(err);
            }
            console.log('文件关闭成功！');
        });
    });

}

function saveQuestion(data) {
    // console.log(data)
    //  connection.connect();

    var  addSql = 'INSERT INTO sw_question(question_type_id,question_title,' +
        'explanation,parent_id,question_bank_category_id,name,difficulty_degree,isclose,isdelete) ' +
        'VALUES(?,?,?,?,?,?,?,?,?)';
    var  addSqlParams = [data['questionTypeId'],data['questionTitle'], data['explanation'],
        data['parentId'], data['questionBankCategoryId'],data['name'], data['difficultyDegree'],data['isClose'], data['isDelete']];
//增
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT Question ID:',result.insertId);

        data['answer'].forEach(item => {
            saveAnswer({
                questionItemId: 162996,
                questionBankId: result.insertId,
                name: "正确",
                result: 0,
                index: 0,
                indexLetter: "A"
            });
        })
        // console.log('INSERT ID:',result);
        console.log('-----------------------------------------------------------------\n\n');
    });

    // connection.end();
}

function saveChildQuestion(data) {
    // connection.connect();

    // var  addSql = 'INSERT INTO sw_question(question_bank_id,question_type_id,question_title,' +
    //     'explanation,parent_id) ' +
    //     'VALUES(?,?,?,?,?)';
    // var  addSqlParams = [data['questionBankId'], data['questionTypeId'],data['questionTitle'], data['explanation'],
    //     data['parentId']];

    var  addSql = 'INSERT INTO sw_question(question_type_id,question_title,' +
        'explanation,parent_id) ' +
        'VALUES(?,?,?,?)';
    var  addSqlParams = [data['questionBankId'], data['questionTypeId'],data['questionTitle'], data['explanation'],
        data['parentId']];
//增
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT CHILDQUESTION ID:',result.insertId);
        saveAnswer({
            questionItemId: 162996,
            questionBankId: result.insertId,
            name: "正确",
            result: 0,
            index: 0,
            indexLetter: "A"
        });
        saveAnswer({
            questionItemId: 162996,
            questionBankId: result.insertId,
            name: "正确",
            result: 0,
            index: 1,
            indexLetter: "A"
        });
        // console.log('INSERT ID:',result);
        console.log('-----------------------------------------------------------------\n\n');
    });

    // connection.end();
}

function saveAnswer(data) {
    // connection.connect();

    // var  addSql = 'INSERT INTO sw_answer(question_item_id,question_bank_id,name,' +
    //     'result,index_number,index_letter) ' +
    //     'VALUES(?,?,?,?,?,?)';
    // var  addSqlParams = [data['questionItemId'], data['questionBankId'],data['name'],
    //     data['result'],data['index'], data['indexLetter']];

    var  addSql = 'INSERT INTO sw_answer(question_bank_id,name,' +
        'result,index_number,index_letter) ' +
        'VALUES(?,?,?,?,?)';
    var  addSqlParams = [data['questionBankId'],data['name'],
        data['result'],data['index'], data['indexLetter']];
//增
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ANWSER ID:',result.insertId);
        // console.log('INSERT ID:',result);
        console.log('-----------------------------------------------------------------\n\n');
    });

    // connection.end();
}
