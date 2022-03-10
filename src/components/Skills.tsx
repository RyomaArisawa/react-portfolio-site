import axios from 'axios';
import Circle from 'react-circle';
import React, { useEffect, useReducer } from 'react';
import {
  actionTypes,
  initialState,
  skillReducer,
} from '../reducers/skillReducers';
import { LanguageObj } from '../types/types';
import { requestStates } from '../consts/consts';
import '../styles/Skills.css';

export const Skills: React.VFC = () => {
  const [state, dispatch] = useReducer(skillReducer, initialState);

  useEffect(() => {
    const fetchGithubData = async () => {
      dispatch({ type: actionTypes.fetch, payload: { languageList: [] } });
      try {
        const response = await axios.get(
          'https://api.github.com/users/RyomaArisawa/repos'
        );
        console.log(response.data);

        const languageList = response.data.map((datum: any) => datum.language);
        const languageObjList = createLanguageObjList(languageList);
        dispatch({
          type: actionTypes.success,
          payload: { languageList: languageObjList },
        });
      } catch (err) {
        console.log(err);
        dispatch({ type: actionTypes.error, payload: { languageList: [] } });
      }
    };
    fetchGithubData();
  }, []);

  const createLanguageObjList = (languageList: string[]): LanguageObj[] => {
    const NonNullList = languageList.filter((language) => language !== null);
    const uniqueLanguageList = [...new Set(NonNullList)];
    const languageObjList: LanguageObj[] = uniqueLanguageList.map(
      (uniqueLanguage) => ({
        language: uniqueLanguage,
        count: languageList.filter((language) => language === uniqueLanguage)
          .length,
      })
    );
    console.log(languageObjList);
    return languageObjList;
  };

  const converseCountToPercentage = (count: number) => {
    if (count > 10) {
      return 100;
    }
    return count * 10;
  };

  const sortedLanguageList = () =>
    state.languageList.sort(
      (firstLang, nextLang) => nextLang.count - firstLang.count
    );

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
          <p>Rating of Github Projects</p>
        </div>
        <div className="skills-container">
          {state.requestState === requestStates.loading && (
            <p className="description">取得中...</p>
          )}
          {state.requestState === requestStates.success &&
            sortedLanguageList().map((item, index) => (
              <div className="skill-item" key={index}>
                <p className="description">
                  <strong>{item.language}</strong>
                </p>
                <Circle
                  animate
                  progress={converseCountToPercentage(item.count)}
                  textColor="#fff"
                />
              </div>
            ))}
          {state.requestState === requestStates.error && (
            <p className="description">エラーが発生しました</p>
          )}
        </div>
      </div>
    </div>
  );
};
