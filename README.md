Enrollment and Graduation Prediction using Random Forest
This project demonstrates the use of Random Forest Classifiers to predict student enrollment and graduation likelihood based on synthetic data. The pipeline involves preprocessing, training, and evaluating models for two tasks:

Predicting the likelihood of enrollment in a program.
Predicting the likelihood of graduation for enrolled students.
Table of Contents
Dataset Description
Features
Model Details
Requirements
How to Run
Results
Future Improvements
Dataset Description
A synthetic dataset with 1000 samples was created for this project. Each row represents a student's data with attributes such as academic scores, participation in extracurricular activities, socioeconomic status, age, gender, and program interest.

Data Structure
Independent Variables:
academic_score: Student's academic performance score.
extracurricular_participation: Participation in extracurricular activities (binary).
socioeconomic_status: Socioeconomic background (categorical: 0-2).
age: Student's age.
gender: Gender (0: Female, 1: Male).
program_interest: Interest in specific programs (categorical: 0-2).
Dependent Variables:
enrollment_status: Whether the student is enrolled (0: No, 1: Yes).
graduation_status: Whether the student graduates (0: No, 1: Yes).
Features
Enrollment Prediction
Predicts whether a student is likely to enroll based on:
Academic performance.
Extracurricular involvement.
Socioeconomic background.
Age, gender, and program interest.
Graduation Prediction
Predicts graduation likelihood for enrolled students using:
Academic performance.
Extracurricular involvement.
Socioeconomic background.
Age and gender.
Model Details
Classifier: Random Forest
Libraries Used: numpy, pandas, sklearn
Training-Test Split: 70% training, 30% testing for both models.
Metrics:
Accuracy
Classification Report (precision, recall, F1-score)
Requirements
Python 3.8+
Libraries:
numpy
pandas
scikit-learn
Google Colab (optional)
How to Run
Clone this repository:


git clone <repository-url>
cd <repository-folder>
Install required libraries:


pip install -r requirements.txt
Run the notebook or script in your Python environment or Google Colab.

Modify new_student data in the script to test predictions.

Results
Enrollment Model
Accuracy: ~47%
Insights:
Moderate predictive ability with room for improvement.
Graduation Model
Accuracy: ~49%
Insights:
Suggests further refinement in features and data.
