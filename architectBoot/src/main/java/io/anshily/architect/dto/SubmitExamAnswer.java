package io.anshily.architect.dto;

import io.anshily.architect.model.ExamAnswer;

import java.util.List;

/**
 * Created by ASUS on 2019/8/7.
 */
public class SubmitExamAnswer {
    String token;
    List<ExamAnswer> examAnswers;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public List<ExamAnswer> getExamAnswers() {
        return examAnswers;
    }

    public void setExamAnswers(List<ExamAnswer> examAnswers) {
        this.examAnswers = examAnswers;
    }
}
