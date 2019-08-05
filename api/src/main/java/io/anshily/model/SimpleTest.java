package io.anshily.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "sw_simple_test")
public class SimpleTest {
    /**
     * 普通练题id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer user_id;

    /**
     * 题目id
     */
    private Integer question_id;

    /**
     * 对应的答案
     */
    @Column(name = "answer")
    private String answer;

    /**
     * 正确性（0：错误，1：正确）
     */
    private Integer istrue;

    /**
     * 状态（1：可用，0：不可用）
     */
    private Integer statu;

    /**
     * 新增时间
     */
    private Date add_time;

    /**
     * 获取普通练题id
     *
     * @return id - 普通练题id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置普通练题id
     *
     * @param id 普通练题id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return user_id
     */
    public Integer getUser_id() {
        return user_id;
    }

    /**
     * @param user_id
     */
    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    /**
     * 获取题目id
     *
     * @return question_id - 题目id
     */
    public Integer getQuestion_id() {
        return question_id;
    }

    /**
     * 设置题目id
     *
     * @param question_id 题目id
     */
    public void setQuestion_id(Integer question_id) {
        this.question_id = question_id;
    }

    /**
     * 获取对应的答案
     *
     * @return answer - 对应的答案
     */
    public String getAnswer() {
        return answer;
    }

    /**
     * 设置对应的答案
     *
     * @param an er 对应的答案
     */
    public void setAnswer(String answer) {
        this.answer = answer;
    }

    /**
     * 获取正确性（0：错误，1：正确）
     *
     * @return istrue - 正确性（0：错误，1：正确）
     */
    public Integer getIstrue() {
        return istrue;
    }

    /**
     * 设置正确性（0：错误，1：正确）
     *
     * @param istrue 正确性（0：错误，1：正确）
     */
    public void setIstrue(Integer istrue) {
        this.istrue = istrue;
    }

    /**
     * 获取状态（1：可用，0：不可用）
     *
     * @return statu - 状态（1：可用，0：不可用）
     */
    public Integer getStatu() {
        return statu;
    }

    /**
     * 设置状态（1：可用，0：不可用）
     *
     * @param statu 状态（1：可用，0：不可用）
     */
    public void setStatu(Integer statu) {
        this.statu = statu;
    }

    /**
     * 获取新增时间
     *
     * @return add_time - 新增时间
     */
    public Date getAdd_time() {
        return add_time;
    }

    /**
     * 设置新增时间
     *
     * @param add_time 新增时间
     */
    public void setAdd_time(Date add_time) {
        this.add_time = add_time;
    }
}