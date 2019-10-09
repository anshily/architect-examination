package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.Answer;

import java.util.List;

public interface AnswerMapper extends Mapper<Answer> {
    List<Integer> getAnswer();
    List<Answer> getAnswerById(int id);
    void A(int id);
    void B(int id);
 }