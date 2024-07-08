"use client "
import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [storyPlot, setStoryPlot] = useState('');
    const [storyLength, setStoryLength] = useState('short');
    const [creativityLevel, setCreativityLevel] = useState(50);
    const [narrativePerspective, setNarrativePerspective] = useState('');
    const [genre, setGenre] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [characterDescription, setCharacterDescription] = useState('');
    const [settingDescription, setSettingDescription] = useState('');

    // Function to handle story generation (replace with your logic)
    const handleGenerateStory = () => {
        console.log('Generating story...', {
            storyPlot,
            storyLength,
            creativityLevel,
            narrativePerspective,
            genre,
            characterName,
            characterDescription,
            settingDescription,
        });
    }

    return (
        <div className='bg-blue-400 pt-8 pb-8 mx-auto sm:w-full p-4 md:p-8'>
            <div className="max-w-5xl mx-auto p-6 bg-white shadow-black shadow-lg rounded-3xl">
                <h1 className="text-5xl text-center font-extrabold mb-4">AI Story Generator</h1>
                <h1 className="text-3xl font-sans text-blue-400 text-center font-bold mb-4">Make your own story!</h1>
                <div className="mb-4">
                    <label className="block  text-md font-bold  text-black">Story Plot</label>
                    <input
                        type="text"
                        value={storyPlot}
                        onChange={(e) => setStoryPlot(e.target.value)}
                        className="mt-1 block outline-blue-400 w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Ex: A librarian discovers a magical book that can bring stories to life."
                    />
                </div>
                <div className=''>
                    <div className="mb-4">
                        <label className="block text-md font-bold  text-black">Story Length</label>
                        <select
                            value={storyLength}
                            onChange={(e) => setStoryLength(e.target.value)}
                            className="mt-1 block w-full p-2 border  border-gray-300 rounded-md"

                        >
                            <option value="short"  >Short</option>
                            <option value="medium">Medium</option>
                            <option value="long">Long</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-md font-bold  text-black">
                            Creativity Level
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={creativityLevel}
                            onChange={(e) => setCreativityLevel(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-md font-bold  text-black">Narrative Perspective (Optional)</label>
                    <select
                        value={narrativePerspective}
                        onChange={(e) => setNarrativePerspective(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"

                    >

                        <option value="first" >First Person</option>
                        <option value="third">Third Person</option>
                        <option value="observer">Observer</option>
                        <option value="camera">Camera Eye</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-md font-bold  text-black">Genre (Optional)</label>
                    <select
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="romance" >Romance</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="thriller">Thriller</option>
                        <option value="mystery">Mystery</option>
                        <option value="nonfiction">Non-Fiction</option>
                        <option value="horror">Horror</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-md font-bold  text-black">Character Name (Optional)</label>
                    <input
                        type="text"
                        value={characterName}
                        onChange={(e) => setCharacterName(e.target.value)}
                        className="mt-1 block w-full outline-blue-400 p-2 border border-gray-300 rounded-md"
                        placeholder="Ex: Abdul Rehman"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-md font-bold  text-black">Character Description (Optional)</label>
                    <input
                        type="text"
                        value={characterDescription}
                        onChange={(e) => setCharacterDescription(e.target.value)}
                        className="mt-1 block w-full p-2 outline-blue-400 border border-gray-300 rounded-md"
                        placeholder="Ex: Abdul Rehman is a 22 years old boy who is studing in the university"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-md font-bold  text-black">Setting Description (Optional)</label>
                    <input
                        type="text"
                        value={settingDescription}
                        onChange={(e) => setSettingDescription(e.target.value)}
                        className="mt-1 block w-full p-2 outline-blue-400 border border-gray-300 rounded-md"
                        placeholder="Ex: An old laibrary with many windows."
                    />
                </div >

                <div className="flex justify-center">
                    <button
                        onClick={handleGenerateStory}
                        className="p-3 px-16 hover:cursor-pointer transition duration-100 hover:scale-105 bg-blue-400 text-white font-bold  rounded-md"
                    >
                        Generate Story
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Form         