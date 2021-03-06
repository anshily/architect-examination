package io.anshily.controller;
import io.anshily.base.core.*;
import io.anshily.dto.AlterPass;
import io.anshily.model.User;
import io.anshily.service.UserService;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Condition;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.*;

/**
* Created by anshi on 2019/08/02.
*/
@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/add")
    public Result add(@RequestBody User user) {
        userService.save(user);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        userService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody User user) {
        userService.update(user);
        return ResultGenerator.successResult();
    }

    @PostMapping("/login")
    public Result login(@RequestBody User user) {

        //账号密码不能为空
        if(user.getIdentify_card() == null || user.getIdentify_card().isEmpty())
        {
            throw new ServiceException(Constants.CODE_ERR_USER_NAME);
        }
        if( user.getPassword() == null || user.getPassword().isEmpty())
        {
            throw new ServiceException(Constants.CODE_ERR_USER_NAME);
        }
        List<User> users =  userService.selectByCSql("identify_card=" + user.getIdentify_card() + " and password=" + user.getPassword());
        if (users.size() > 0){
            String newToken = UUID.randomUUID().toString();

            User user1 = users.get(0);
            user1.setToken(newToken);
            user1.setUpdate_time(new Date());
            userService.update(user1);
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("token",newToken);
            return ResultGenerator.successResult(map);
        }else {
            return ResultGenerator.errResult(5001, "用户名密码错误");
        }
    }

    @GetMapping("/userInfo")
    public Result userInfo(@RequestParam String token){
        User user = userService.getUserInfoByToken(token);
        return ResultGenerator.successResult(user);
    }

    @PostMapping("/alter/password")
    public Result alterPassword(@RequestBody AlterPass alterPass){

        if(alterPass.getToken() == null || alterPass.getToken().isEmpty())
        {
            throw new ServiceException(Constants.CODE_ERR_USER_NAME);
        }
        if( alterPass.getOldPassword() == null || alterPass.getOldPassword().isEmpty())
        {
            throw new ServiceException(Constants.CODE_ERR_USER_NAME);
        }
        if( alterPass.getNewPassword() == null || alterPass.getNewPassword().isEmpty())
        {
            throw new ServiceException(Constants.CODE_ERR_USER_NAME);
        }

        User user = userService.findBy("token", alterPass.getToken());
        if (user == null) {
            throw new ServiceException(5003, "token有误请重新登录");
        }
        if (!user.getPassword().equals(alterPass.getOldPassword())){
            throw new ServiceException(5002, "原密码有误！");
        }
        user.setPassword(alterPass.getNewPassword());
        user.setUpdate_time(new Date());
        userService.update(user);
        return ResultGenerator.successResult(user);
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        User user = userService.findById(id);
        return ResultGenerator.successResult(user);
    }

    @GetMapping("/list")
    public Result list(PageBean<User> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<User> list = userService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/custom/list")
    public Result customList(@RequestBody User user) {
        PageBean<User> page = new PageBean<User>();
    //        PageHelper.startPage(page.getPageNum(),page.getSize());
    Condition condition = new Condition(User.class);
    Example.Criteria criteria = condition.createCriteria();
    criteria.andLike("id","%1%");
    List<User> list = userService.findByCondition(condition);
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
