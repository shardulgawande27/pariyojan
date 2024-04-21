require("dotenv").config();
import { Request, Response } from "express";
import { statusType as statusCode } from "@/src/enum/statusTypes";
import jwt from 'jsonwebtoken';
import { sendResponse } from '@/src/services/ResponseService';
import knex from '../../db';
import moment from 'moment';

export async function postPorject(req:Request, res:Response){
    console.log("This is post")
    try {
        const {
            m_project_name,	m_project_desc	,m_project_info ,m_project_image_url_1,	m_project_image_url_2,	m_project_image_url_3,
        } = req.body
    
        knex('m_projects').insert({
            m_project_name,	m_project_desc	,m_project_info ,m_project_image_url_1,	m_project_image_url_2,	m_project_image_url_3,
        }).then(() => console.log("data inserted successfully")).catch((error) => {
            console.error('Error inserting object:', error);
          })
          
    
        console.log({
            m_project_name,	m_project_desc	,m_project_info ,m_project_image_url_1,	m_project_image_url_2,	m_project_image_url_3,
        })
    } catch (error:any) {
    sendResponse(res, statusCode.DB_ERROR, error.message, null);
        
    }
  



}

export async function getProjects(req: Request, res: Response){
    console.log("this is get")
}

