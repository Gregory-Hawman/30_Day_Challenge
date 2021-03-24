import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HC_ChallengeCard30 = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const [ notes, setNotes] = useState('');

    const handleCheckboxChange = e => {
        setCheckedItems({
            ...checkedItems,
            [e.target.name]: e.target.checked
        })
        console.log('checkedItems: ', checkedItems);
    };

    const handleNotesChange = e => {
        setNotes({
            ...notes,
            [e.target.name]: e.target.value
        })
        console.log('Notes:', notes);
    };

    const handleNoteSubmit = note => {
        setNotes(note);
    };

    const duration = 30;  // data given to us from the user
    const title = 'Running'; // data given to us from the user
    const start_date = DateTime.local(2021, 1, 1); // data given to us from the user
    

    let dates = [];
    for (let date = 0; date < duration; date ++ ) {
        if (date === 0){
            dates.push(start_date)
        } else {
            dates.push(start_date.plus({ days: date }))
        };
    };

    let days = [];
    for (let day = 1; day < duration + 1; day++){
        days.push(day)
    };

    let checkboxes = [];
    for (let cb = 1; cb < duration + 1; cb++){
        const checkbox = {
            name : `check-box-${cb}`,
            key : `checkBox${cb}`,
            label : `Check Box ${cb}`
        }
        checkboxes.push(checkbox)
    };

    let notesList = [];
    for (let n = 1; n < duration + 1; n++){
        const note = {
            name : `note-${n}`,
            key : `note${n}`,
            label : `Note ${n}`,
        };
        notesList.push(note)
    };

    console.log(notes);

    let iconSets = [];
    for (let i = 1; i < duration + 1; i++){
        const iconSet = {
            name : `iconSet-${i}`,
            key : `iconSet${i}`,
            label : `Icon Set ${i}`,
        };
        iconSets.push(iconSet)
    };

    console.log(iconSets);

    return (
        <div className='card'>
             <h1>{duration} Day {title} Challenge</h1> {/* "Wake-Up" would be auto-populated with the input when creating */}

            {/* Key of each Day (what data will be there) */}
            <div className='cardKeyInfo'>
                <h3>Day</h3>
                <h3>Date</h3>
                <h3>Done?</h3>
                <h3>Notes</h3>
            </div>
            <div className='cardInfo'>
                <div className='dayInfo'>
                    {days.map((day) => {
                        return (
                            <div key={day.toString()} >
                                <p>Day {day}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='dateInfo'>
                    {dates.map((date) => {
                        return (
                            <div key={date.toLocaleString(DateTime.DATE_MED)} >
                                <p> {date.toLocaleString(DateTime.DATE_MED)}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='checkBoxes'>
                    {checkboxes.map(cb => {
                        return (
                            <div>
                                <form>
                                    <label key={cb.key} >
                                        <input
                                            
                                            type='checkbox'
                                            name={cb.name}
                                            checked={checkedItems[cb.name]}
                                            onChange={handleCheckboxChange}
                                        />
                                    </label>
                                </form>
                            </div>
                        )
                    })}
                </div>
                <div className='notes'>
                    {notesList.map(n => {
                        return (
                            <div>
                                <form className='notesForm'>
                                    <label key={n.key} >
                                        <input
                                            type='textarea'
                                            name={n.name}
                                            onChange={handleNotesChange}
                                            placeholder="Have any thoughts?"
                                        />
                                    </label>
                                    <button type='submit' onClick={handleNoteSubmit}>Add Note</button>
                                </form>
                            </div>
                        )
                    })}
                </div>
                <div className='icons'>
                    {iconSets.map(i => {
                        return (
                            <div key={i.key}>
                                <FontAwesomeIcon
                                    icon='check'
                                    name={i.name}
                                />
                                <FontAwesomeIcon
                                    icon='edit'
                                    name={i.name}
                                />
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export const HC_ChallengeCard60 = () => {
    const duration = 100; // data given to us from the user
    const title = 'Coding'; // data given to us from the user
    const start_date = DateTime.local(2021, 1, 5); // data given to us from the user

    let dates = [];
    for (let date = 0; date < duration; date ++ ) {
        if (date === 0){
            dates.push(start_date)
        } else {
            dates.push(start_date.plus({ days: date }))
        };
    };
    
    let days = [];
    for (let day = 1; day < duration + 1; day++){
        days.push(day)
    };

    return (
        <div className='card'>
            <h1>{duration} Day {title} Challenge</h1>
            <div className='cardKeyInfo'>
                <h3>Day</h3>
                <h3>Date</h3>
                <h3>Done?</h3>
                <h3>Notes</h3>
            </div>

            <div className='cardInfo'>
                <div className='dayInfo'>
                    {days.map((day, index) => {
                        return (
                            <div key={day} >
                                <p>Day {day}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='dateInfo'>
                    {dates.map((date, index) => {
                        return (
                            <div key={date} >
                                <p> {date.toLocaleString(DateTime.DATE_MED)}</p>
                            </div>
                        )
                    })}
                </div>
                    {/* <p>Day 1</p> 
                    <p>Jan-5-21</p> They have to pick a start date
                    <p> Checkbox </p> Checkbox for if they complete this day yet. They can't do it unless today's date matches the date they are choosing or before
                    <p> Notes </p> They can input any notes or thoughts they had about that days challenge */}
            </div>
        </div>
    )
};