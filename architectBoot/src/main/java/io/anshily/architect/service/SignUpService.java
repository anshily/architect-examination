package io.anshily.architect.service;


import io.anshily.architect.base.core.Service;
import io.anshily.architect.model.SignUp;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * Created by anshi on 2019/08/12.
 */
public interface SignUpService extends Service<SignUp> {
    List<SignUp> getSignUpMessage(int statu);
    void changeSignupStatu( int id);
}
