package io.anshily.model;

import javax.persistence.*;

@Table(name = "sw_simple_test")
public class SimpleTest {
    /**
     * 普通练题id
     */
    @Id
    private Integer s_t_id;

    private Integer s_t_userid;

    /**
     * 题目id
     */
    private Integer s_t_questionid;

    /**
     * 对应的答案
     */
    @Column(name = "s_t_answer")
    private String s_t_an er;

    /**
     * 正确性（0：错误，1：正确）
     */
    private Integer istrue;

    /**
     * 状态（1：可用，0：不可用）
     */
    private Integer statu;

    /**
     * 获取普通练题id
     *
     * @return s_t_id - 普通练题id
     */
    public Integer getS_t_id() {
        return s_t_id;
    }

    /**
     * 设置普通练题id
     *
     * @param s_t_id 普通练题id
     */
    public void setS_t_id(Integer s_t_id) {
        this.s_t_id = s_t_id;
    }

    /**
     * @return s_t_userid
     */
    public Integer getS_t_userid() {
        return s_t_userid;
    }

    /**
     * @param s_t_userid
     */
    public void setS_t_userid(Integer s_t_userid) {
        this.s_t_userid = s_t_userid;
    }

    /**
     * 获取题目id
     *
     * @return s_t_questionid - 题目id
     */
    public Integer getS_t_questionid() {
        return s_t_questionid;
    }

    /**
     * 设置题目id
     *
     * @param s_t_questionid 题目id
     */
    public void setS_t_questionid(Integer s_t_questionid) {
        this.s_t_questionid = s_t_questionid;
    }

    /**
     * 获取对应的答案
     *
     * @return s_t_answer - 对应的答案
     */
    public String getS_t_an er() {
        return s_t_an er;
    }

    /**
     * 设置对应的答案
     *
     * @param s_t_an er 对应的答案
     */
    public void setS_t_an er(String s_t_an er) {
        this.s_t_an er = s_t_an er;
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
}