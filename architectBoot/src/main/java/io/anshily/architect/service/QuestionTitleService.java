package io.anshily.architect.service;
import io.anshily.architect.base.core.Service;
import io.anshily.architect.model.QuestionTitle;

import java.util.List;


/**
 * Created by anshi on 2019/08/05.
 */
public interface QuestionTitleService extends Service<QuestionTitle> {

    List<QuestionTitle>  getQuestionTitleByExamid(String token,Integer examid);
}
