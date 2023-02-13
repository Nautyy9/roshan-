import { IInterViewSettings, IJobDetails, IRequisitionDetails } from "@src/interface/forms";
import { type } from "os";
import React, { createContext, useContext, useState } from "react";

const reqDetailsValue = {} as IRequisitionDetails 
const jobDetailValue ={} as IJobDetails
const interviewSettingValue ={} as IInterViewSettings


function getTypeForContext() {
  const [reqDetails, setReqDetails] = useState<IRequisitionDetails>(reqDetailsValue)
  const [jobDetail, setJobDetail] = useState<IJobDetails>(jobDetailValue)
  const [interviewSetting, setInterviewSetting] = useState<IInterViewSettings>(interviewSettingValue)
  return {reqDetails, setReqDetails, jobDetail, setJobDetail, interviewSetting, setInterviewSetting}
}

type contextType = ReturnType<typeof getTypeForContext>

// const DataContext = createContext<{
//   state: typeof initialValues;
//   setState: React.Dispatch<React.SetStateAction<typeof initialValues>>;
// } >(null!);

const DataContext = createContext<contextType>(null!)


const DataProvider = ({children} : {children : React.ReactNode} ) => {
  const [reqDetails, setReqDetails] = useState<IRequisitionDetails>(reqDetailsValue)
  const [jobDetail, setJobDetail] = useState<IJobDetails>(jobDetailValue)
  const [interviewSetting, setInterviewSetting] = useState<IInterViewSettings>(interviewSettingValue)


  const values ={
    reqDetails, setReqDetails, jobDetail, setJobDetail, interviewSetting, setInterviewSetting
  }
  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
