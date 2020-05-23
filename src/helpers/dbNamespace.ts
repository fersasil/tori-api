/* tslint:disable */


/**
 * AUTO-GENERATED FILE @ 2020-05-22 08:39:08 - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.3.0.3
 * $ schemats generate -c mysql://username:password@localhost/myDB -t address -t assistance -t assistance_tag -t course -t presence_list -t subject -t subject_course -t tag -t user -s myDB
 *
 */


export namespace addressFields {
    export type address_id = number;
    export type address_cep = string;
    export type address_street = string;
    export type address_number = number;
    export type address_complement = string | null;
    export type address_reference = string | null;
    export type address_nickname = string;
    export type address_latitude = number | null;
    export type address_logintude = number | null;

}

export interface address {
    address_id: addressFields.address_id;
    address_cep: addressFields.address_cep;
    address_street: addressFields.address_street;
    address_number: addressFields.address_number;
    address_complement: addressFields.address_complement;
    address_reference: addressFields.address_reference;
    address_nickname: addressFields.address_nickname;
    address_latitude: addressFields.address_latitude;
    address_logintude: addressFields.address_logintude;

}

export namespace assistanceFields {
    export type assistance_id = number;
    export type assistance_owner_id = number;
    export type assistance_title = string;
    export type assistance_total_vacancies = number;
    export type assistance_avaliable = boolean;
    export type assistance_avaliable_vacancies = number;
    export type assistance_local_id = number;
    export type assistance_description = string;
    export type assistance_date = Date;
    export type assistance_created_at = Date;
    export type assistance_course_id = number | null;
    export type assistance_subject_id = number | null;

}

export interface assistance {
    assistance_id: assistanceFields.assistance_id;
    assistance_owner_id: assistanceFields.assistance_owner_id;
    assistance_title: assistanceFields.assistance_title;
    assistance_total_vacancies: assistanceFields.assistance_total_vacancies;
    assistance_avaliable: assistanceFields.assistance_avaliable;
    assistance_avaliable_vacancies: assistanceFields.assistance_avaliable_vacancies;
    assistance_local_id: assistanceFields.assistance_local_id;
    assistance_description: assistanceFields.assistance_description;
    assistance_date: assistanceFields.assistance_date;
    assistance_created_at: assistanceFields.assistance_created_at;
    assistance_course_id: assistanceFields.assistance_course_id;
    assistance_subject_id: assistanceFields.assistance_subject_id;

}

export namespace assistance_tagFields {
    export type assistances_tags_id = number;
    export type assistance_id = number;
    export type tag_id = number;
    export type created_at = Date;

}

export interface assistance_tag {
    assistances_tags_id: assistance_tagFields.assistances_tags_id;
    assistance_id: assistance_tagFields.assistance_id;
    tag_id: assistance_tagFields.tag_id;
    created_at: assistance_tagFields.created_at;

}

export namespace courseFields {
    export type course_id = number;
    export type course_name = string;
    export type courses_number_semesters = number | null;
    export type course_description = string | null;

}

export interface course {
    course_id: courseFields.course_id;
    course_name: courseFields.course_name;
    courses_number_semesters: courseFields.courses_number_semesters;
    course_description: courseFields.course_description;

}

export namespace presence_listFields {
    export type presence_list_id = number;
    export type aided_student_id = number;
    export type presence_list_owner_id = number;
    export type assistance_id = number;
    export type presence_list_assistant_avaliation = number;
    export type presence_list_aided_student_avaliation = number;
    export type presence_list_aided_student_presence = boolean;

}

export interface presence_list {
    presence_list_id: presence_listFields.presence_list_id;
    aided_student_id: presence_listFields.aided_student_id;
    presence_list_owner_id: presence_listFields.presence_list_owner_id;
    assistance_id: presence_listFields.assistance_id;
    presence_list_assistant_avaliation: presence_listFields.presence_list_assistant_avaliation;
    presence_list_aided_student_avaliation: presence_listFields.presence_list_aided_student_avaliation;
    presence_list_aided_student_presence: presence_listFields.presence_list_aided_student_presence;

}

export namespace subjectFields {
    export type subject_id = number;
    export type subject_name = string;
    export type subject_description = string | null;
    export type subject_code = string | null;

}

export interface subject {
    subject_id: subjectFields.subject_id;
    subject_name: subjectFields.subject_name;
    subject_description: subjectFields.subject_description;
    subject_code: subjectFields.subject_code;

}

export namespace subject_courseFields {
    export type course_id = number;
    export type subject_id = number;
    export type subject_course_id = number;
    export type subject_course_semester = number | null;

}

export interface subject_course {
    course_id: subject_courseFields.course_id;
    subject_id: subject_courseFields.subject_id;
    subject_course_id: subject_courseFields.subject_course_id;
    subject_course_semester: subject_courseFields.subject_course_semester;

}

export namespace tagFields {
    export type tag_id = number;
    export type tag_name = string;
    export type tag_description = string | null;
    export type tag_created_at = Date;

}

export interface tag {
    tag_id: tagFields.tag_id;
    tag_name: tagFields.tag_name;
    tag_description: tagFields.tag_description;
    tag_created_at: tagFields.tag_created_at;

}

export namespace userFields {
    export type user_id = number;
    export type user_full_name = string;
    export type user_created_at = Date;
    export type user_is_assistant = boolean;
    export type user_course_id = number | null;
    export type user_cpf = string | null;
    export type user_matricula = string | null;
    export type user_idUFFS = string | null;
    export type user_assistant_stars = number;
    export type user_student_stars = number;
    export type user_email = string | null;
    export type user_phone_number = string | null;
    export type user_password = string;
    export type user_verified_assistant = boolean;
    export type user_profile_photo = string | null;

}

export interface user {
    user_id: userFields.user_id;
    user_full_name: userFields.user_full_name;
    user_created_at: userFields.user_created_at;
    user_is_assistant: userFields.user_is_assistant;
    user_course_id: userFields.user_course_id;
    user_cpf: userFields.user_cpf;
    user_matricula: userFields.user_matricula;
    user_idUFFS: userFields.user_idUFFS;
    user_assistant_stars: userFields.user_assistant_stars;
    user_student_stars: userFields.user_student_stars;
    user_email: userFields.user_email;
    user_phone_number: userFields.user_phone_number;
    user_password: userFields.user_password;
    user_verified_assistant: userFields.user_verified_assistant;
    user_profile_photo: userFields.user_profile_photo;

}
