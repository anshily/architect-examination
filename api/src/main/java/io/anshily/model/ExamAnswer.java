package io.anshily.model;

import javax.persistence.*;

@Table(name = "sw_exam_answer")
public class ExamAnswer {
    /**
     * 答案表id
     */
    @Id
    private Integer e_a_id;

    /**
     * 对应考试信息表id
     */
    private Integer e_a_examid;

    /**
     * 对应的体面id
     */
    private Integer e_a_question_title_id;

    /**
     * 对应的题目答案
     */
    private String e_a_answer;

    /**
     * 状态（1：可用，0：不可用）
     */
    private Integer statu;

    /**
     * 获取答案表id
     *
     * @return e_a_id - 答案表id
     */
    public Integer getE_a_id() {
        return e_a_id;
    }

    /**
     * 设置答案表id
     *
     * @param e_a_id 答案表id
     */
    public void setE_a_id(Integer e_a_id) {
        this.e_a_id = e_a_id;
    }

    /**
     * 获取对应考试信息表id
     *
     * @return e_a_examid - 对应考试信息表id
     */
    public Integer getE_a_examid() {
        return e_a_examid;
    }

    /**
     * 设置对应考试信息表id
     *
     * @param e_a_examid 对应考试信息表id
     */
    public void setE_a_examid(Integer e_a_examid) {
        this.e_a_examid = e_a_examid;
    }

    /**
     * 获取对应的体面id
     *
     * @return e_a_question_title_id - 对应的体面id
     */
    public Integer getE_a_question_title_id() {
        return e_a_question_title_id;
    }

    /**
     * 设置对应的体面id
     *
     * @param e_a_question_title_id 对应的体面id
     */
    public void setE_a_question_title_id(Integer e_a_question_title_id) {
        this.e_a_question_title_id = e_a_question_title_id;
    }

    /**
     * 获取对应的题目答案
     *
     * @return e_a_answer - 对应的题目答案
     */
    public String getE_a_answer() {
        return e_a_answer;
    }

    /**
     * 设置对应的题目答案
     *
     * @param e_a_answer 对应的题目答案
     */
    public void setE_a_answer(String e_a_answer) {
        this.e_a_answer = e_a_answer;
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