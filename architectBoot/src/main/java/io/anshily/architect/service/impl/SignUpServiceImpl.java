package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.dao.SignUpMapper;
import io.anshily.architect.model.SignUp;
import io.anshily.architect.service.SignUpService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by anshi on 2019/08/12.
 */
@Service
@Transactional
public class SignUpServiceImpl extends AbstractService<SignUp> implements SignUpService {
    @Resource
    private SignUpMapper swSignUpMapper;

    @Override
    public List<SignUp> getSignUpMessage(int statu) {
        List<SignUp> list=swSignUpMapper.getSignUpMessage(statu);
        return list;
    }
}
