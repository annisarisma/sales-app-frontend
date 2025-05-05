import React, { useEffect } from 'react'

import BreadCrumb from '@src/components/Common/BreadCrumb'

import ProjectsTabs from '../ProjectsTabs'

const ProjectsRoadMap = () => {
  useEffect(() => {
    document.title = 'RoadMap | Domiex - React JS Admin & Dashboard Template'
  }, [])

  return (
    <React.Fragment>
      <BreadCrumb title="RoadMap" subTitle="Projects" />
      {/* tabs */}
      <ProjectsTabs />

      <div className="card">
        <div className="card-body">
          <div className="relative before:absolute space-y-6 before:w-2 before:h-[calc(100%_-_5px)] before:bg-gray-100 dark:before:bg-dark-850 ltr:before:left-3.5 rtl:before:right-3.5 before:top-2 before:rounded-md">
            <div className="relative inline-block px-5 py-2 bg-gray-100 rounded-full dark:bg-dark-850 timeline-month">
              <i className="text-gray-400 ri-circle-fill dark:text-dark-500"></i>{' '}
              Project RoadMap
            </div>
            <div className="relative ltr:pl-10 rtl:pr-10 timeline-section before:absolute before:w-7 before:h-px before:bg-gray-200 dark:before:bg-dark-800 before:top-3.5 ltr:before:left-5 rtl:before:right-5 after:absolute after:top-2 after:left-3 rtl:after:right-3 after:bg-primary-500 after:border after:size-3 after:rounded-full">
              <div className="mb-5 timeline-date py-1 px-3.5 bg-gray-100 dark:bg-dark-850 dark:text-dark-500 text-gray-500 relative inline-block rounded-md border border-gray-200 dark:border-dark-800">
                Phase 1: Data Collection and Preparation (Month 1-2)
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:border-dark-800 dark:bg-dark-850">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">Define Data Requirements:</h6>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Identify the specific data needed for the project,
                        including customer demographics, transaction history,
                        web interaction logs, marketing campaign data, and
                        product catalog details.
                      </li>
                      <li>
                        Collaborate with stakeholders to understand their data
                        needs and ensure all relevant information is collected.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:bg-dark-850 dark:border-dark-800">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">
                      Data Source Identification and Access:
                    </h6>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Determine the internal and external data sources that
                        will provide the required data.
                      </li>
                      <li>
                        Ensure access to databases, data warehouses, and
                        third-party data providers.
                      </li>
                      <li>
                        Set up necessary data pipelines for continuous data flow
                        if required.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:border-dark-800 dark:bg-dark-850">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">Data Extraction:</h6>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Extract data from identified sources using appropriate
                        tools and techniques.
                      </li>
                      <li>
                        Use SQL, APIs, web scraping, or ETL (Extract, Transform,
                        Load) tools to gather the data.
                      </li>
                      <li>
                        Ensure extraction processes are efficient and minimize
                        disruptions to live systems.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:bg-dark-850 dark:border-dark-800">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">Data Cleaning:</h6>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Remove duplicates, correct errors, and handle missing
                        values in the datasets.
                      </li>
                      <li>
                        Standardize data formats and units to ensure
                        consistency.
                      </li>
                      <li>
                        Identify and resolve any discrepancies or anomalies in
                        the data.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:bg-dark-850 dark:border-dark-800">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">Data Quality Assurance:</h6>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Conduct thorough quality checks to ensure the integrity
                        and reliability of the data.
                      </li>
                      <li>
                        Implement validation rules and perform audits to confirm
                        data accuracy.
                      </li>
                      <li>
                        Document the data cleaning and transformation processes
                        for transparency and reproducibility.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:bg-dark-850 dark:border-dark-800">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">Data Privacy and Security:</h6>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Implement data encryption and access control mechanisms
                        to protect sensitive information.
                      </li>
                      <li>
                        Ensure compliance with relevant data protection
                        regulations such as GDPR or CCPA.
                      </li>
                      <li>
                        Anonymize or pseudonymize personal data where necessary
                        to safeguard user privacy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ltr:pl-10 rtl:pr-10 timeline-section before:absolute before:w-7 before:h-px before:bg-gray-200 dark:before:bg-dark-800 before:top-3.5 ltr:before:left-5 rtl:before:right-5 after:absolute after:top-2 after:left-3 rtl:after:right-3 after:bg-primary-500 after:border after:size-3 after:rounded-full">
              <div className="mb-5 timeline-date py-1 px-3.5 bg-gray-100 text-gray-500 relative inline-block rounded-md border border-gray-200 dark:border-dark-800 dark:text-dark-500 dark:bg-dark-850">
                Phase 2: Model Development (Month 3-5)
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:bg-dark-850 dark:border-dark-800">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">Define Problem Statements:</h6>
                    <ul className="mb-3 space-y-2 list-disc list-inside">
                      <li>
                        Clearly define the specific problems each model aims to
                        solve (e.g., customer behavior prediction, sales
                        forecasting, recommendation system).
                      </li>
                    </ul>
                    <h6 className="mb-3">Select Appropriate Algorithms:</h6>
                    <ul className="mb-3 space-y-2 list-disc list-inside">
                      <li>
                        Research and select suitable machine learning algorithms
                        for each problem statement.
                      </li>
                      <li>
                        Consider a variety of models such as regression,
                        classification, clustering, and recommendation
                        algorithms.
                      </li>
                    </ul>
                    <h6 className="mb-3">Design Model Architecture:</h6>
                    <ul className="mb-3 space-y-2 list-disc list-inside">
                      <li>
                        Design the architecture for each model, including input
                        features, layers (for neural networks), and output
                        formats.
                      </li>
                      <li>
                        Document the rationale behind the chosen architectures.
                      </li>
                    </ul>
                    <h6 className="mb-3">
                      Prepare Training and Validation Datasets:
                    </h6>
                    <ul className="mb-3 space-y-2 list-disc list-inside">
                      <li>
                        Split the preprocessed data into training, validation,
                        and test sets.
                      </li>
                      <li>
                        Ensure data splits maintain representative distributions
                        and avoid data leakage.
                      </li>
                    </ul>
                    <h6 className="mb-3">Develop Model Training Pipelines:</h6>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Implement training pipelines using selected machine
                        learning frameworks (e.g., TensorFlow, PyTorch,
                        Scikit-Learn).
                      </li>
                      <li>
                        Automate data preprocessing steps within the training
                        pipelines.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:bg-dark-850 dark:border-dark-800">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">Tools and Technologies:</h6>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Machine Learning Frameworks (e.g., TensorFlow, PyTorch,
                        Scikit-Learn)
                      </li>
                      <li>Data Processing Tools (e.g., Pandas, NumPy)</li>
                      <li>
                        Model Training Infrastructure (e.g., GPUs, cloud
                        computing resources)
                      </li>
                      <li>Version Control Systems (e.g., Git)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ltr:pl-10 rtl:pr-10 timeline-section before:absolute before:w-7 before:h-px before:bg-gray-200 dark:before:bg-dark-800 before:top-3.5 ltr:before:left-5 rtl:before:right-5 after:absolute after:top-2 after:left-3 rtl:after:right-3 after:bg-primary-500 after:border after:size-3 after:rounded-full">
              <div className="mb-5 timeline-date py-1 px-3.5 bg-gray-100 text-gray-500 relative inline-block rounded-md border border-gray-200 dark:bg-dark-850 dark:border-dark-800 dark:text-dark-500">
                Phase 3: Integration and Deployment (Month 6-7)
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:bg-dark-850 dark:border-dark-800">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">
                      Integration Planning and Initial Setup
                    </h6>
                    <ul className="mb-3 space-y-2 list-decimal list-inside">
                      <li>Develop Integration Plan</li>
                      <li>Collaborate with Development Team</li>
                      <li>Setup Development and Testing Environments</li>
                      <li>API Development</li>
                    </ul>
                    <h6 className="mb-3">Model Integration and Testing</h6>
                    <ul className="mb-3 space-y-2 list-decimal list-inside">
                      <li>Integrate Models into the Platform</li>
                      <li>Functional Testing</li>
                      <li>User Interface Integration</li>
                      <li>Security and Access Control</li>
                    </ul>
                    <h6 className="mb-3">Deployment in Staging Environment</h6>
                    <ul className="mb-3 space-y-2 list-decimal list-inside">
                      <li>Deploy Models in Staging</li>
                      <li>Conduct Performance Testing</li>
                      <li>User Acceptance Testing (UAT)</li>
                      <li>Finalize Documentation</li>
                    </ul>
                    <h6 className="mb-3">
                      Production Deployment and Monitoring
                    </h6>
                    <ul className="space-y-2 list-decimal list-inside">
                      <li>Final Review and Approval</li>
                      <li>Production Deployment</li>
                      <li>Monitoring and Maintenance Setup</li>
                      <li>Post-Deployment Support</li>
                      <li>Iterative Improvements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ltr:pl-10 rtl:pr-10 timeline-section before:absolute before:w-7 before:h-px before:bg-gray-200 dark:before:bg-dark-800 before:top-3.5 ltr:before:left-5 rtl:before:right-5 after:absolute after:top-2 after:left-3 rtl:after:right-3 after:bg-primary-500 after:border after:size-3 after:rounded-full">
              <div className="mb-5 timeline-date py-1 px-3.5 bg-gray-100 text-gray-500 relative inline-block rounded-md border border-gray-200 dark:bg-dark-850 dark:border-dark-800 dark:text-dark-500">
                Phase 4: User Interface and Reporting (Month 8-9)
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="relative overflow-hidden bg-gray-100 border border-gray-200 rounded-md timeline-box dark:bg-dark-850 dark:border-dark-800">
                  <div className="box-content p-5 bg-gray-100 dark:bg-dark-850">
                    <h6 className="mb-3">
                      Requirements Gathering and Design Planning
                    </h6>
                    <ul className="mb-3 space-y-2 list-decimal list-inside">
                      <li>Stakeholder Interviews and Surveys</li>
                      <li>Define UI/UX Requirements</li>
                      <li>Design Mockups and Prototypes</li>
                      <li>Review and Feedback</li>
                    </ul>
                    <h6 className="mb-3">User Interface Development</h6>
                    <ul className="space-y-2 list-decimal list-inside">
                      <li>Front-End Development</li>
                      <li>Integration with AI Models</li>
                      <li>User Authentication and Access Control</li>
                      <li>UI Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectsRoadMap
