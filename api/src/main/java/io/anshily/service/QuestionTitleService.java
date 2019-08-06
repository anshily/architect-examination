package io.anshily.service;
import io.anshily.model.QuestionTitle;
import io.anshily.base.core.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


/**
 * Created by anshi on 2019/08/05.
 */
public interface QuestionTitleService extends Service<QuestionTitle> {

    List<QuestionTitle>  getQuestionTitleByExamid(String token,Integer examid);
}
