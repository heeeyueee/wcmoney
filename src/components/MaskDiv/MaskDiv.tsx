import styled from 'styled-components';

const MaskDiv = styled.div` 
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    background-color:rgba(0,0,0,.6);
    z-index: 2;
    .box{
      margin: 30% auto;
      border-radius: 10px;
      width: 90%;
   
      background-color:#fff;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    .title{
      display:flex;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color:#ffda44;
      font-size: 16px;
      padding: 10px;
      .icon{
        width: 18px;
        height: 18px;
      }
    }
    .main{
    display:flex;
    flex-direction: column;
    padding: 10px 20px;
      span{
        color: #b4b6b5;
        text-align: left;
        font-size: 14px;
        padding: 10px 0;
      }
      textarea{
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 15px;
        font-size: 14px;
        background-color:#f9f9f7;
        width: 100%;
        height: 180px;
        margin-bottom: 10px;
      }
      button{
        outline: none;
        border: none;
        font-size: 14px;
        color: #343233;
        margin-top: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color:#ffda44;
      }
    }
`;


export { MaskDiv }