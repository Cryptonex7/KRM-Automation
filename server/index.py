# Imports
from flask_swagger_ui import get_swaggerui_blueprint
from werkzeug.contrib.fixers import ProxyFix
from werkzeug.utils import cached_property
from flask_restplus import Resource, Api, fields
from flask_cors import CORS
from flask import Flask
import numpy as np
import pandas as pd
import json

# Supress Warnings
import warnings
warnings.simplefilter('ignore')


app = Flask(__name__)
### swagger specific ###
SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
SWAGGERUI_BLUEPRINT = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "covid19analytics"
    }
)
app.register_blueprint(SWAGGERUI_BLUEPRINT, url_prefix=SWAGGER_URL)
### end swagger specific ###

app.wsgi_app = ProxyFix(app.wsgi_app)
api = Api(app,
          version='0.1',
          title='Our sample API',
          description='This is our sample API'
          )

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET'])
def index():
    return 'Hello World!'


@app.route('/analyse')
def update():
    print("Updating DB")
    stu_data = pd.read_csv('./data/StudentDatabase.csv')
    comp_data = pd.read_csv('./data/company_schema.csv')

    # ? Students Placed Year Wise
    year_wise = pd.DataFrame({
        'year': [2015, 2016, 2017, 2018, 2019],
        'students': [comp_data['hired_15'].sum(), comp_data['hired_16'].sum(), comp_data['hired_17'].sum(), comp_data['hired_18'].sum(), comp_data['hired_19'].sum()]
    })
    stud_hired_bar = {
        'x': pd.Series(year_wise['year']).tolist(),
        'y': pd.Series(year_wise['students']).tolist(),
        'type': 'bar',
        'title': 'Students Hired per Year',
        'x_label': 'Year',
        'y_label': 'Students'
    }
    stud_hired_pie = {
        'values': pd.Series(year_wise['students']).tolist(),
        'labels': pd.Series(year_wise['year']).tolist(),
        'type': 'pie',
        'title': 'Travel history analysis'
    }

    # ? Gender Distribution of Student Placed
    stud_gender_pie = {
        'values': pd.Series(stu_data['Gender']).tolist(),
        'type': 'pie',
        'title': 'Travel history analysis'
    }

    # ? Branch Distribution of Student Placed
    stud_branch_pie = {
        'values': pd.Series(stu_data['Branch']).tolist(),
        'type': 'pie',
        'title': 'Travel history analysis'
    }

    # ? Package Grabbed in a Given Year
    stu_data['placed'] = 1
    ctc_grouped = stu_data.groupby('CTC')['placed'].sum().reset_index()
    ctc_grouped_sorted = ctc_grouped.sort_values(by='placed', ascending=False)
    # horizontal bar-graph
    stud_package_hbar = {
        'x': pd.Series(ctc_grouped_sorted['placed']).tolist(),
        'y': pd.Series(ctc_grouped_sorted['CTC']).tolist(),
        'orientation': 'h',
        'type': 'bar',
        'title': 'Package of Placed Students',
        'x_label': 'Placed Students',
        'y_label': 'CTC'
    }

    # ? CGPA Corelation with CTC
    cgpa = [5, 6, 7, 8, 9, 10]
    avg_ctc = [
        stu_data[stu_data['CGPA'] == 5]['CTC'].mean(),
        stu_data[stu_data['CGPA'] == 6]['CTC'].mean(),
        stu_data[stu_data['CGPA'] == 7]['CTC'].mean(),
        stu_data[stu_data['CGPA'] == 8]['CTC'].mean(),
        stu_data[stu_data['CGPA'] == 9]['CTC'].mean(),
        stu_data[stu_data['CGPA'] == 10]['CTC'].mean()
    ]
    stud_cgpa_line = {
        'x': cgpa,
        'y': avg_ctc,
        'type': 'line',
        'title': 'CGPA Corelation with CTC',
        'x_label': 'CGPA',
        'y_label': 'CTC'
    }

    #? Profile offered by Recruiters
    profile_grouped = stu_data.groupby('profile')['placed'].sum().reset_index()
    profile_grouped_sorted = profile_grouped.sort_values(by='placed',ascending=True)
    # horizontal bar-graph
    stud_profile_hbar = {
        'x': pd.Series(profile_grouped_sorted['placed']).tolist(),
        'y': pd.Series(profile_grouped_sorted['profile']).tolist(),
        'orientation': 'h',
        'type': 'bar',
        'title': 'Profile of Placed Students',
        'x_label': 'Placed Students',
        'y_label': 'Profile'
    }
    graph_data = {}
    return json.dumps(graph_data)


if __name__ == "__main__":
    app.run(debug=True)  # for deployment turn it off(False)
