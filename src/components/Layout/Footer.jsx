
import React, { useState, useEffect, useCallback } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MessageCircleMoreIcon,
  ChevronRight,
  Heart,
  Award,
  Shield,
  Calendar,
  ArrowUp,
  X
} from 'lucide-react';
import {Link} from 'react-router-dom'

// Modal Component for Legal Pages
const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

// Service Content Components
const SportsPhysiotherapy = () => (
  <div className="prose prose-gray max-w-none">
    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Sports Physiotherapy & Athletic Performance</h3>
      <p className="text-lg text-gray-700">Specialized care for athletes and active individuals to optimize performance, prevent injuries, and ensure rapid recovery.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">🏃‍♂️ What We Treat</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Sports-related injuries and trauma</li>
          <li>• Muscle strains and ligament sprains</li>
          <li>• Joint dislocations and fractures</li>
          <li>• Overuse injuries and repetitive strain</li>
          <li>• Concussion and head injury rehabilitation</li>
          <li>• Performance enhancement needs</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-green-800 mb-2">⚡ Our Approach</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Comprehensive biomechanical analysis</li>
          <li>• Sport-specific rehabilitation programs</li>
          <li>• Advanced manual therapy techniques</li>
          <li>• Functional movement screening</li>
          <li>• Performance optimization strategies</li>
          <li>• Injury prevention education</li>
        </ul>
      </div>
    </div>

    <h4 className="text-xl font-semibold mb-4">🔬 Our Evidence-Based Treatment Methods</h4>
    
    <p className="mb-4">At OptimaPhysio Care, our sports physiotherapy program combines cutting-edge techniques with proven methodologies to deliver exceptional results for athletes at all levels.</p>

    <div className="space-y-4 mb-6">
      <div className="border-l-4 border-blue-500 pl-4">
        <h5 className="font-semibold text-gray-800">1. Advanced Assessment & Diagnosis</h5>
        <p className="text-gray-700">We begin with comprehensive movement analysis using state-of-the-art technology including gait analysis, postural assessment, and biomechanical screening. Our detailed evaluation identifies not just the injury, but also contributing factors such as muscle imbalances, movement compensations, and performance limitations.</p>
      </div>

      <div className="border-l-4 border-green-500 pl-4">
        <h5 className="font-semibold text-gray-800">2. Personalized Rehabilitation Programs</h5>
        <p className="text-gray-700">Every athlete receives a customized treatment plan based on their specific sport, position, goals, and injury profile. Our programs progress through distinct phases: acute care, restoration of function, performance enhancement, and return-to-sport preparation.</p>
      </div>

      <div className="border-l-4 border-purple-500 pl-4">
        <h5 className="font-semibold text-gray-800">3. Manual Therapy & Soft Tissue Work</h5>
        <p className="text-gray-700">Our skilled therapists employ various manual techniques including joint mobilization, myofascial release, trigger point therapy, and sports massage to restore optimal tissue quality, reduce pain, and improve mobility.</p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h5 className="font-semibold text-gray-800">4. Functional Training & Performance Enhancement</h5>
        <p className="text-gray-700">We utilize sport-specific exercises, plyometrics, agility training, and strength conditioning to not only rehabilitate injuries but enhance athletic performance. Our functional approach ensures athletes return to their sport stronger and more resilient than before.</p>
      </div>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <h5 className="font-semibold text-gray-800 mb-2">🏆 Why Choose Our Sports Physiotherapy?</h5>
      <p className="text-gray-700 mb-2">Our sports physiotherapy team has extensive experience working with athletes from recreational to elite levels. We understand the unique demands of different sports and the psychological aspects of sports injuries.</p>
      <p className="text-gray-700">With access to the latest research and treatment modalities, we ensure our athletes receive world-class care that gets them back to peak performance safely and efficiently.</p>
    </div>

    <div className="text-center p-4 bg-blue-600 text-white rounded-lg">
      <p className="font-semibold">Ready to elevate your athletic performance?</p>
      <p className="text-sm mt-1">Contact us today for a comprehensive sports physiotherapy assessment.</p>
    </div>
  </div>
);

const ManualTherapy = () => (
  <div className="prose prose-gray max-w-none">
    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Manual Therapy & Hands-On Treatment</h3>
      <p className="text-lg text-gray-700">Expert hands-on therapeutic techniques to restore mobility, reduce pain, and optimize musculoskeletal function.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-green-800 mb-2">🤲 What We Treat</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Joint stiffness and restricted movement</li>
          <li>• Muscle tension and spasms</li>
          <li>• Chronic pain conditions</li>
          <li>• Post-surgical adhesions</li>
          <li>• Headaches and neck pain</li>
          <li>• Spinal dysfunction</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">✋ Our Techniques</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Joint mobilization and manipulation</li>
          <li>• Myofascial release therapy</li>
          <li>• Trigger point therapy</li>
          <li>• Soft tissue mobilization</li>
          <li>• Muscle energy techniques</li>
          <li>• Craniosacral therapy</li>
        </ul>
      </div>
    </div>

    <h4 className="text-xl font-semibold mb-4">🎯 Our Comprehensive Manual Therapy Approach</h4>
    
    <p className="mb-4">Manual therapy is the cornerstone of our treatment philosophy. Our expert therapists use their hands as sophisticated diagnostic and treatment tools to identify and address the root causes of your pain and dysfunction.</p>

    <div className="space-y-4 mb-6">
      <div className="border-l-4 border-green-500 pl-4">
        <h5 className="font-semibold text-gray-800">1. Detailed Palpation and Assessment</h5>
        <p className="text-gray-700">Our therapists are trained in advanced palpation techniques to identify tissue texture changes, temperature variations, asymmetries, and restricted movement patterns. This hands-on assessment provides crucial information that guides our treatment approach and helps us understand the interconnected nature of your condition.</p>
      </div>

      <div className="border-l-4 border-blue-500 pl-4">
        <h5 className="font-semibold text-gray-800">2. Joint Mobilization and Manipulation</h5>
        <p className="text-gray-700">We employ gentle, controlled movements to restore normal joint mechanics. Our techniques range from low-grade oscillatory movements for pain relief to high-velocity, low-amplitude thrusts for joint restriction. Each technique is carefully selected based on your condition, comfort level, and treatment goals.</p>
      </div>

      <div className="border-l-4 border-purple-500 pl-4">
        <h5 className="font-semibold text-gray-800">3. Advanced Soft Tissue Techniques</h5>
        <p className="text-gray-700">Our myofascial release, trigger point therapy, and soft tissue mobilization techniques address muscle tension, fascial restrictions, and scar tissue formation. We use various approaches including sustained pressure, cross-friction massage, and instrument-assisted soft tissue mobilization (IASTM) to restore optimal tissue quality.</p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h5 className="font-semibold text-gray-800">4. Neuromuscular Re-education</h5>
        <p className="text-gray-700">Through muscle energy techniques, proprioceptive neuromuscular facilitation (PNF), and other neurological approaches, we help retrain your nervous system to function optimally. This includes addressing muscle imbalances, improving coordination, and enhancing motor control patterns.</p>
      </div>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <h5 className="font-semibold text-gray-800 mb-2">🌟 The OptimaPhysio Manual Therapy Difference</h5>
      <p className="text-gray-700 mb-2">Our manual therapy approach is both an art and a science. Our therapists undergo extensive training and continuing education to master these complex skills. We combine traditional techniques with modern research to provide the most effective hands-on care.</p>
      <p className="text-gray-700">Each treatment session is tailored to your unique needs, with techniques adjusted based on your response and progress. We believe in empowering our patients with education about their condition and self-management strategies.</p>
    </div>

    <div className="text-center p-4 bg-green-600 text-white rounded-lg">
      <p className="font-semibold">Experience the healing power of expert manual therapy</p>
      <p className="text-sm mt-1">Schedule your consultation to discover how our hands-on approach can help you.</p>
    </div>
  </div>
);

const Rehabilitation = () => (
  <div className="prose prose-gray max-w-none">
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Rehabilitation Services</h3>
      <p className="text-lg text-gray-700">Specialized recovery programs designed to restore function, strength, and independence after injury or surgery.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">🏥 What We Treat</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Post-surgical rehabilitation</li>
          <li>• Stroke and neurological conditions</li>
          <li>• Orthopedic injuries</li>
          <li>• Cardiac rehabilitation</li>
          <li>• Work-related injuries</li>
          <li>• Chronic disease management</li>
        </ul>
      </div>
      <div className="bg-pink-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-pink-800 mb-2">🎯 Our Focus Areas</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Functional mobility restoration</li>
          <li>• Strength and endurance building</li>
          <li>• Balance and coordination training</li>
          <li>• Pain management</li>
          <li>• Activities of daily living</li>
          <li>• Return to work programs</li>
        </ul>
      </div>
    </div>

    <h4 className="text-xl font-semibold mb-4">🔄 Our Comprehensive Rehabilitation Process</h4>
    
    <p className="mb-4">Rehabilitation is a journey of recovery that requires expertise, patience, and personalized care. Our multidisciplinary approach ensures you receive comprehensive support throughout your recovery process.</p>

    <div className="space-y-4 mb-6">
      <div className="border-l-4 border-purple-500 pl-4">
        <h5 className="font-semibold text-gray-800">1. Initial Assessment and Goal Setting</h5>
        <p className="text-gray-700">We begin with a thorough evaluation of your current functional status, medical history, and personal goals. Using standardized assessment tools and functional tests, we establish baseline measurements and create realistic, measurable objectives for your recovery journey.</p>
      </div>

      <div className="border-l-4 border-pink-500 pl-4">
        <h5 className="font-semibold text-gray-800">2. Phase-Based Recovery Programs</h5>
        <p className="text-gray-700">Our rehabilitation programs are structured in phases, progressing from basic mobility and pain management through functional training to advanced conditioning. Each phase builds upon the previous one, ensuring safe and effective progression toward your goals.</p>
      </div>

      <div className="border-l-4 border-indigo-500 pl-4">
        <h5 className="font-semibold text-gray-800">3. Multi-Modal Treatment Approach</h5>
        <p className="text-gray-700">We integrate various treatment modalities including therapeutic exercises, manual therapy, electrotherapy, aquatic therapy, and functional training. Our treatment plans are dynamic, adapting to your progress and changing needs throughout the rehabilitation process.</p>
      </div>

      <div className="border-l-4 border-teal-500 pl-4">
        <h5 className="font-semibold text-gray-800">4. Functional Training and Real-World Application</h5>
        <p className="text-gray-700">Our rehabilitation emphasizes functional movements that directly relate to your daily activities, work requirements, or sports participation. We simulate real-world scenarios to ensure your recovery translates into meaningful improvements in your quality of life.</p>
      </div>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <h5 className="font-semibold text-gray-800 mb-2">💪 Specialized Rehabilitation Programs</h5>
      <div className="grid md:grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="font-medium">Post-Surgical Rehabilitation:</p>
          <p className="text-sm">Specialized protocols for joint replacements, ACL reconstruction, rotator cuff repair, and spinal surgeries.</p>
        </div>
        <div>
          <p className="font-medium">Neurological Rehabilitation:</p>
          <p className="text-sm">Expert care for stroke, Parkinson's disease, multiple sclerosis, and traumatic brain injuries.</p>
        </div>
        <div>
          <p className="font-medium">Workplace Injury Recovery:</p>
          <p className="text-sm">Comprehensive programs including work conditioning, functional capacity evaluations, and ergonomic training.</p>
        </div>
        <div>
          <p className="font-medium">Geriatric Rehabilitation:</p>
          <p className="text-sm">Age-appropriate programs focusing on fall prevention, mobility, and maintaining independence.</p>
        </div>
      </div>
    </div>

    <div className="text-center p-4 bg-purple-600 text-white rounded-lg">
      <p className="font-semibold">Start your journey to recovery today</p>
      <p className="text-sm mt-1">Our rehabilitation experts are here to guide you every step of the way.</p>
    </div>
  </div>
);

const PainManagement = () => (
  <div className="prose prose-gray max-w-none">
    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Pain Management Solutions</h3>
      <p className="text-lg text-gray-700">Comprehensive, evidence-based approaches to manage acute and chronic pain conditions effectively.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-red-800 mb-2">⚡ Pain Conditions We Treat</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Chronic back and neck pain</li>
          <li>• Arthritis and joint pain</li>
          <li>• Fibromyalgia and myofascial pain</li>
          <li>• Headaches and migraines</li>
          <li>• Neuropathic pain</li>
          <li>• Post-surgical pain</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-orange-800 mb-2">🛠️ Our Treatment Methods</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Manual therapy and mobilization</li>
          <li>• Therapeutic exercise programs</li>
          <li>• Electrotherapy modalities</li>
          <li>• Dry needling and acupuncture</li>
          <li>• Pain education and counseling</li>
          <li>• Mindfulness and relaxation techniques</li>
        </ul>
      </div>
    </div>

    <h4 className="text-xl font-semibold mb-4">🧠 Our Holistic Pain Management Philosophy</h4>
    
    <p className="mb-4">Pain is complex and multifaceted, involving physical, emotional, and psychological components. Our comprehensive approach addresses all aspects of pain to provide lasting relief and improved quality of life.</p>

    <div className="space-y-4 mb-6">
      <div className="border-l-4 border-red-500 pl-4">
        <h5 className="font-semibold text-gray-800">1. Comprehensive Pain Assessment</h5>
        <p className="text-gray-700">We conduct thorough evaluations using validated pain assessment tools, movement analysis, and psychosocial screening. Understanding your pain experience, triggers, and impact on daily life helps us develop targeted treatment strategies that address your specific needs.</p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h5 className="font-semibold text-gray-800">2. Multimodal Treatment Approach</h5>
        <p className="text-gray-700">Our treatment combines multiple evidence-based interventions including manual therapy, therapeutic exercises, modalities like ultrasound and TENS, dry needling, and patient education. This comprehensive approach targets different pain mechanisms for optimal results.</p>
      </div>

      <div className="border-l-4 border-yellow-500 pl-4">
        <h5 className="font-semibold text-gray-800">3. Pain Science Education</h5>
        <p className="text-gray-700">We believe in empowering patients with knowledge about pain mechanisms, helping them understand how pain works in the body. This education reduces fear, improves treatment compliance, and enables better self-management of pain conditions.</p>
      </div>

      <div className="border-l-4 border-pink-500 pl-4">
        <h5 className="font-semibold text-gray-800">4. Lifestyle and Behavioral Modifications</h5>
        <p className="text-gray-700">We work with you to identify lifestyle factors that may contribute to pain and develop strategies for improvement. This includes sleep hygiene, stress management, ergonomic modifications, and activity pacing techniques.</p>
      </div>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <h5 className="font-semibold text-gray-800 mb-2">🎯 Specialized Pain Programs</h5>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-medium">Chronic Pain Program:</span> Intensive, multidisciplinary approach for long-term pain conditions with focus on function and quality of life.</p>
        <p><span className="font-medium">Headache and Migraine Clinic:</span> Specialized assessment and treatment for various types of headaches using manual therapy and trigger point techniques.</p>
        <p><span className="font-medium">Arthritis Management:</span> Comprehensive programs for osteoarthritis and rheumatoid arthritis focusing on joint protection and mobility.</p>
        <p><span className="font-medium">Workplace Pain Solutions:</span> Ergonomic assessments and interventions for work-related pain conditions.</p>
      </div>
    </div>

    <div className="text-center p-4 bg-red-600 text-white rounded-lg">
      <p className="font-semibold">Don't let pain control your life</p>
      <p className="text-sm mt-1">Discover how our evidence-based pain management can help you reclaim your life.</p>
    </div>
  </div>
);

const ErgonomicAssessment = () => (
  <div className="prose prose-gray max-w-none">
    <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 rounded-lg mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Ergonomic Assessment Services</h3>
      <p className="text-lg text-gray-700">Comprehensive workplace evaluations to prevent injuries and optimize productivity through better ergonomic practices.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-indigo-800 mb-2">💼 What We Evaluate</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Computer workstation setup</li>
          <li>• Manufacturing and assembly lines</li>
          <li>• Healthcare worker environments</li>
          <li>• Home office configurations</li>
          <li>• Driver and vehicle ergonomics</li>
          <li>• Industrial and warehouse settings</li>
        </ul>
      </div>
      <div className="bg-cyan-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-cyan-800 mb-2">📋 Our Services</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Individual workstation assessments</li>
          <li>• Group ergonomic training</li>
          <li>• Equipment recommendations</li>
          <li>• Injury prevention programs</li>
          <li>• Return-to-work evaluations</li>
          <li>• Ergonomic policy development</li>
        </ul>
      </div>
    </div>

    <h4 className="text-xl font-semibold mb-4">🔍 Our Comprehensive Ergonomic Process</h4>
    
    <p className="mb-4">Poor ergonomics is a leading cause of workplace injuries and decreased productivity. Our systematic approach identifies risk factors and provides practical solutions to create safer, more efficient work environments.</p>

    <div className="space-y-4 mb-6">
      <div className="border-l-4 border-indigo-500 pl-4">
        <h5 className="font-semibold text-gray-800">1. Detailed Workplace Analysis</h5>
        <p className="text-gray-700">Our certified ergonomists conduct comprehensive on-site evaluations, analyzing workstation setup, job demands, environmental factors, and worker behaviors. We use standardized assessment tools and measurement devices to identify ergonomic risk factors and areas for improvement.</p>
      </div>

      <div className="border-l-4 border-cyan-500 pl-4">
        <h5 className="font-semibold text-gray-800">2. Individual Worker Assessment</h5>
        <p className="text-gray-700">We evaluate each worker's specific needs, considering their physical characteristics, work habits, existing health conditions, and job requirements. This personalized approach ensures our recommendations are practical and effective for each individual.</p>
      </div>

      <div className="border-l-4 border-blue-500 pl-4">
        <h5 className="font-semibold text-gray-800">3. Risk Factor Identification</h5>
        <p className="text-gray-700">We identify ergonomic risk factors including repetitive motions, awkward postures, excessive force requirements, contact stress, and environmental hazards. Our assessment includes both immediate concerns and potential long-term risks that could lead to injury.</p>
      </div>

      <div className="border-l-4 border-teal-500 pl-4">
        <h5 className="font-semibold text-gray-800">4. Customized Solutions and Implementation</h5>
        <p className="text-gray-700">We provide detailed reports with prioritized recommendations, including equipment modifications, workstation adjustments, and behavioral changes. Our solutions are practical, cost-effective, and designed for easy implementation with measurable outcomes.</p>
      </div>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <h5 className="font-semibold text-gray-800 mb-2">🏢 Industry-Specific Expertise</h5>
      <div className="grid md:grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="font-medium">Office Environments:</p>
          <p className="text-sm">Computer workstations, meeting rooms, and collaborative spaces with focus on reducing musculoskeletal disorders.</p>
        </div>
        <div>
          <p className="font-medium">Healthcare Settings:</p>
          <p className="text-sm">Patient handling, equipment positioning, and workflow optimization for healthcare professionals.</p>
        </div>
        <div>
          <p className="font-medium">Manufacturing:</p>
          <p className="text-sm">Assembly lines, material handling, and repetitive task analysis with injury prevention focus.</p>
        </div>
        <div>
          <p className="font-medium">Transportation:</p>
          <p className="text-sm">Vehicle cab design, driver positioning, and long-haul comfort optimization.</p>
        </div>
      </div>
    </div>

    <div className="text-center p-4 bg-indigo-600 text-white rounded-lg">
      <p className="font-semibold">Invest in your workforce's health and productivity</p>
      <p className="text-sm mt-1">Contact us for a comprehensive ergonomic assessment of your workplace.</p>
    </div>
  </div>
);

const PreventiveCare = () => (
  <div className="prose prose-gray max-w-none">
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Preventive Care & Wellness Programs</h3>
      <p className="text-lg text-gray-700">Proactive healthcare solutions designed to prevent injuries, maintain optimal function, and promote long-term wellness.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-emerald-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-emerald-800 mb-2">🛡️ Prevention Focus Areas</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Sports injury prevention</li>
          <li>• Workplace injury reduction</li>
          <li>• Fall prevention for seniors</li>
          <li>• Postural dysfunction prevention</li>
          <li>• Chronic disease management</li>
          <li>• Age-related mobility decline</li>
        </ul>
      </div>
      <div className="bg-teal-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-teal-800 mb-2">🎯 Our Programs</h4>
        <ul className="text-gray-700 space-y-1">
          <li>• Movement screening assessments</li>
          <li>• Corrective exercise programs</li>
          <li>• Wellness education workshops</li>
          <li>• Fitness and conditioning plans</li>
          <li>• Lifestyle modification counseling</li>
          <li>• Corporate wellness programs</li>
        </ul>
      </div>
    </div>

    <h4 className="text-xl font-semibold mb-4">🌟 Our Proactive Wellness Philosophy</h4>
    
    <p className="mb-4">Prevention is always better than cure. Our evidence-based preventive care programs help you maintain optimal health, avoid injuries, and age gracefully while staying active and independent.</p>

    <div className="space-y-4 mb-6">
      <div className="border-l-4 border-emerald-500 pl-4">
        <h5 className="font-semibold text-gray-800">1. Comprehensive Movement Analysis</h5>
        <p className="text-gray-700">We use advanced screening tools like the Functional Movement Screen (FMS) and Selective Functional Movement Assessment (SFMA) to identify movement dysfunctions, muscle imbalances, and injury risk factors before problems develop into painful conditions.</p>
      </div>

      <div className="border-l-4 border-teal-500 pl-4">
        <h5 className="font-semibold text-gray-800">2. Personalized Exercise Prescription</h5>
        <p className="text-gray-700">Based on your screening results, lifestyle, and goals, we develop customized exercise programs that address your specific needs. These programs focus on mobility, stability, strength, and neuromuscular control to optimize your movement patterns and reduce injury risk.</p>
      </div>

      <div className="border-l-4 border-cyan-500 pl-4">
        <h5 className="font-semibold text-gray-800">3. Education and Lifestyle Optimization</h5>
        <p className="text-gray-700">We provide comprehensive education on proper body mechanics, ergonomics, nutrition, sleep hygiene, and stress management. Our goal is to empower you with knowledge and strategies to make informed decisions about your health and prevent future problems.</p>
      </div>

      <div className="border-l-4 border-green-500 pl-4">
        <h5 className="font-semibold text-gray-800">4. Ongoing Monitoring and Support</h5>
        <p className="text-gray-700">Prevention is an ongoing process. We provide regular follow-up assessments, program modifications, and continuous support to ensure you maintain optimal health. Our team is always available to address concerns and adjust your program as your needs change.</p>
      </div>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <h5 className="font-semibold text-gray-800 mb-2">💼 Specialized Prevention Programs</h5>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-medium">Corporate Wellness:</span> Comprehensive workplace health programs including ergonomic training, fitness challenges, and injury prevention workshops.</p>
        <p><span className="font-medium">Athletic Performance:</span> Pre-season screenings, conditioning programs, and ongoing monitoring for athletes of all levels.</p>
        <p><span className="font-medium">Senior Wellness:</span> Fall prevention, balance training, and mobility maintenance programs for older adults.</p>
        <p><span className="font-medium">Women's Health:</span> Specialized programs for pregnancy, postpartum recovery, and pelvic floor health.</p>
      </div>
    </div>

    <div className="text-center p-4 bg-emerald-600 text-white rounded-lg">
      <p className="font-semibold">Invest in your future health today</p>
      <p className="text-sm mt-1">Start your preventive care journey with our comprehensive wellness assessment.</p>
    </div>
  </div>
);

// Legal Content Components
const PrivacyPolicy = () => (
        
  <div className="prose prose-gray max-w-none">
    <h3 className="text-xl font-semibold mb-4">Privacy Policy - OptimaPhysio Care</h3>
    <p className="mb-4"><strong>Effective Date:</strong> January 1, 2025</p>
    
    <h4 className="text-lg font-semibold mt-6 mb-3">1. Information We Collect</h4>
    <p className="mb-4">We collect information you provide directly to us, such as when you:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Schedule appointments or consultations</li>
      <li>Complete patient intake forms</li>
      <li>Contact us via phone, email, or website</li>
      <li>Subscribe to our newsletter</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">2. Protected Health Information (PHI)</h4>
    <p className="mb-4">As a healthcare provider, we collect and maintain protected health information in accordance with HIPAA regulations, including:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Medical history and treatment records</li>
      <li>Insurance and billing information</li>
      <li>Diagnostic and treatment notes</li>
      <li>Progress reports and assessments</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">3. How We Use Your Information</h4>
    <p className="mb-4">We use your information for:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Providing physiotherapy services and treatment</li>
      <li>Scheduling and appointment management</li>
      <li>Insurance claims and billing</li>
      <li>Communication about your care</li>
      <li>Quality improvement and patient safety</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">4. Information Sharing</h4>
    <p className="mb-4">We may share your information with:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Healthcare providers involved in your care</li>
      <li>Insurance companies for claims processing</li>
      <li>Legal authorities when required by law</li>
      <li>Business associates bound by confidentiality agreements</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">5. Data Security</h4>
    <p className="mb-4">We implement appropriate security measures to protect your information, including:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Encrypted data transmission and storage</li>
      <li>Access controls and authentication</li>
      <li>Regular security audits and updates</li>
      <li>Staff training on privacy practices</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">6. Your Rights</h4>
    <p className="mb-4">You have the right to:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Access and review your medical records</li>
      <li>Request corrections to your information</li>
      <li>Request restrictions on information use</li>
      <li>File complaints about privacy practices</li>
    </ul>

    <p className="mt-6 text-sm text-gray-600">
      For questions about this privacy policy, contact us at nikhilkapoor9540@gmail.com or +91 8447646815.
    </p>
  </div>
);

const TermsOfService = () => (
  <div className="prose prose-gray max-w-none">
    <h3 className="text-xl font-semibold mb-4">Terms of Service - OptimaPhysio Care</h3>
    <p className="mb-4"><strong>Effective Date:</strong> January 1, 2025</p>
    
    <h4 className="text-lg font-semibold mt-6 mb-3">1. Acceptance of Terms</h4>
    <p className="mb-4">By using our services or website, you agree to be bound by these terms of service. If you do not agree, please do not use our services.</p>

    <h4 className="text-lg font-semibold mt-6 mb-3">2. Services Provided</h4>
    <p className="mb-4">OptimaPhysio Care provides physiotherapy and rehabilitation services including:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Physical therapy assessments and treatments</li>
      <li>Manual therapy and therapeutic exercises</li>
      <li>Rehabilitation programs</li>
      <li>Pain management services</li>
      <li>Ergonomic assessments</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">3. Patient Responsibilities</h4>
    <p className="mb-4">As a patient, you agree to:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Provide accurate and complete medical history</li>
      <li>Follow treatment plans and home exercise programs</li>
      <li>Attend scheduled appointments punctually</li>
      <li>Pay for services as agreed</li>
      <li>Notify us of any changes in your condition</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">4. Appointment Policy</h4>
    <ul className="mb-4 ml-6 list-disc">
      <li>Appointments must be canceled at least 24 hours in advance</li>
      <li>Late cancellations may result in fees</li>
      <li>No-shows may be charged the full session fee</li>
      <li>Emergency appointments are subject to availability</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">5. Payment and Insurance</h4>
    <ul className="mb-4 ml-6 list-disc">
      <li>Payment is due at the time of service unless prior arrangements are made</li>
      <li>We accept cash, cards, and most insurance plans</li>
      <li>Patients are responsible for understanding their insurance coverage</li>
      <li>Outstanding balances may be sent to collections</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">6. Limitation of Liability</h4>
    <p className="mb-4">Our liability is limited to the cost of services provided. We are not liable for indirect or consequential damages.</p>

    <h4 className="text-lg font-semibold mt-6 mb-3">7. Modification of Terms</h4>
    <p className="mb-4">We reserve the right to modify these terms at any time. Changes will be posted on our website and take effect immediately.</p>

    <p className="mt-6 text-sm text-gray-600">
      For questions about these terms, contact us at nikhilkapoor9540@gmail.com or +91 8447646815.
    </p>
  </div>
);

const AccessibilityStatement = () => (
  <div className="prose prose-gray max-w-none">
    <h3 className="text-xl font-semibold mb-4">Accessibility Statement - OptimaPhysio Care</h3>
    <p className="mb-4"><strong>Last Updated:</strong> January 1, 2025</p>
    
    <h4 className="text-lg font-semibold mt-6 mb-3">Our Commitment</h4>
    <p className="mb-4">OptimaPhysio Care is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

    <h4 className="text-lg font-semibold mt-6 mb-3">Accessibility Features</h4>
    <p className="mb-4">Our website includes the following accessibility features:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Keyboard navigation support</li>
      <li>Screen reader compatibility</li>
      <li>High contrast color schemes</li>
      <li>Scalable text and images</li>
      <li>Alternative text for images</li>
      <li>Clear heading structure</li>
      <li>Focus indicators for interactive elements</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">Physical Accessibility</h4>
    <p className="mb-4">Our clinic facilities feature:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Wheelchair accessible entrances and exits</li>
      <li>Accessible parking spaces</li>
      <li>Wide doorways and corridors</li>
      <li>Accessible restroom facilities</li>
      <li>Adjustable treatment tables</li>
      <li>Clear pathways throughout the facility</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">Communication Support</h4>
    <p className="mb-4">We provide various communication options:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Large print materials upon request</li>
      <li>Interpreter services when needed</li>
      <li>Multiple contact methods (phone, email, in-person)</li>
      <li>Written treatment instructions</li>
      <li>Visual aids for exercises and procedures</li>
    </ul>

    <h4 className="text-lg font-semibold mt-6 mb-3">Standards Compliance</h4>
    <p className="mb-4">We strive to conform to WCAG 2.1 Level AA standards and continuously monitor our accessibility compliance.</p>

    <h4 className="text-lg font-semibold mt-6 mb-3">Feedback and Assistance</h4>
    <p className="mb-4">If you encounter any accessibility barriers or need assistance, please contact us:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Phone: +91 8447646815</li>
      <li>Email: nikhilkapoor9540@gmail.com</li>
      <li>In-person at our clinic</li>
    </ul>

    <p className="mb-4">We welcome feedback on how to improve accessibility and will respond within 3 business days.</p>

    <h4 className="text-lg font-semibold mt-6 mb-3">Ongoing Improvements</h4>
    <p className="mb-4">We regularly review and update our accessibility practices, including:</p>
    <ul className="mb-4 ml-6 list-disc">
      <li>Regular accessibility audits</li>
      <li>Staff training on accessibility best practices</li>
      <li>User testing with assistive technologies</li>
      <li>Updates based on user feedback</li>
    </ul>
  </div>
);

const OptimizedFooter = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // Smooth scroll detection with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle URL updates when modal opens/closes
  useEffect(() => {
    if (activeModal) {
      const service = services.find(s => s.modalKey === activeModal);
      if (service) {
        // Update URL without page reload
        window.history.pushState(
          { modal: activeModal }, 
          `${service.name} - OptimaPhysio Care`, 
          service.href
        );
      }
    } else {
      // Reset URL when modal closes
      window.history.pushState(
        {}, 
        'OptimaPhysio Care - Premier Physiotherapy Clinic', 
        window.location.pathname === '/' ? '/' : '/'
      );
    }
  }, [activeModal]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.modal) {
        setActiveModal(event.state.modal);
      } else {
        setActiveModal(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter signup
      console.log('Newsletter signup:', email);
      setEmail('');
      // You could add success feedback here
    }
  }, [email]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }, []);

  const openModal = useCallback((modalType, event) => {
    if (event) {
      event.preventDefault();
    }
    setActiveModal(modalType);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  // Enhanced link data with better SEO
  const quickLinks = [
    { name: 'About Us', href: '/about', title: 'Learn about OptimPhysio Care - Expert Physiotherapy Team' },
    { name: 'Our Treatment', href: '/Treatment', title: 'Comprehensive Physiotherapy Treatment - Delhi NCR' },
    { name: 'Contact Us', href: '/Contact', title: 'Get in touch with our expert physiotherapy team' },
    { name: 'Our Team', href: '/team', title: 'Meet our Expert Physiotherapists and Healthcare Team' },
    // { name: 'Patient Portal', href: '/portal', title: 'Secure Patient Portal - Access Your Health Records' },
    // { name: 'Blog & Resources', href: '/blog', title: 'Health Tips, Exercise Guides & Physiotherapy Resources' }
  ];

  const services = [
    { 
      name: 'Sports Physiotherapy', 
      href: '/services/sports', 
      title: 'Sports Injury Treatment & Athletic Performance',
      modalKey: 'sports',
      component: SportsPhysiotherapy
    },
    { 
      name: 'Manual Therapy', 
      href: '/services/manual', 
      title: 'Hands-on Manual Therapy & Manipulation Techniques',
      modalKey: 'manual',
      component: ManualTherapy
    },
    { 
      name: 'Rehabilitation', 
      href: '/services/rehabilitation', 
      title: 'Post-Surgery & Injury Rehabilitation Programs',
      modalKey: 'rehabilitation',
      component: Rehabilitation
    },
    { 
      name: 'Pain Management', 
      href: '/services/pain', 
      title: 'Chronic Pain Management & Relief Solutions',
      modalKey: 'pain',
      component: PainManagement
    },
    { 
      name: 'Ergonomic Assessment', 
      href: '/services/ergonomic', 
      title: 'Workplace Ergonomic Evaluation & Solutions',
      modalKey: 'ergonomic',
      component: ErgonomicAssessment
    },
    { 
      name: 'Preventive Care', 
      href: '/services/preventive', 
      title: 'Injury Prevention Programs & Wellness Plans',
      modalKey: 'preventive',
      component: PreventiveCare
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/people/optima-physio-care/100094770625926/', 
      name: 'Facebook',
      rel: 'noopener noreferrer'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/optimaphysiocare/', 
      name: 'Instagram',
      rel: 'noopener noreferrer'
    },
 
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFilReKLFY8TAAAAZiYMhnIWL2bjuJIAPICcyymDmv2Mrx5VsoLCrtNspNJv4mc3Mcufq5dukTgs7BPFZNG88N6sT7pEIvzb3cWsBjjqrZzGtCyIcXZcijpIX9YXCFwFv4LTDI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fnikhil-kapoor-68072b24a', 
      name: 'LinkedIn',
      rel: 'noopener noreferrer'
    },
    { 
      icon: MessageCircleMoreIcon, 
      href: 'https://api.whatsapp.com/send/?phone=%2B918447646815&text&type=phone_number&app_absent=0', 
      name: 'LinkedIn',
      rel: 'noopener noreferrer'
    },
   
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 8:00 PM', schema: 'Mo-Fr 07:00-20:00' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM', schema: 'Sa 08:00-18:00' },
    { day: 'Sunday', hours: '9:00 AM - 4:00 PM', schema: 'Su 09:00-16:00' }
  ];

  return (
    <>
      <footer 
        className="relative bg-gray-900 text-white overflow-hidden"
        role="contentinfo"
        itemScope
        itemType="https://schema.org/WPFooter"
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Enhanced Structured Data for Medical Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            '@id': 'https://optimaphysiocare.in/#organization',
            name: 'OptimaPhysio Care',
            alternateName: ['Optima Physio Care', 'N.K. Physiotherapy Clinic'],
            url: 'https://optimaphysiocare.in',
            logo: {
              '@type': 'ImageObject',
              url: 'https://optimaphysiocare.in/images/logo.png',
              width: 200,
              height: 80
            },
            description: 'Premier physiotherapy clinic in Nangloi, Delhi offering comprehensive rehabilitation services, sports physiotherapy, manual therapy, and pain management with evidence-based treatments.',
            slogan: 'Empowering movement, restoring function, enhancing lives.',
            foundingDate: '2020',
            address: {
              '@type': 'PostalAddress',
              name: 'N.K. Physiotherapy Clinic',
              streetAddress: 'Nangloi',
              addressLocality: 'Delhi',
              addressRegion: 'Delhi',
              postalCode: '110041',
              addressCountry: 'IN'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 28.6762094,
              longitude: 77.0730073
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+91-8447646815',
                contactType: 'customer service',
                email: 'nikhilkapoor9540@gmail.com',
                areaServed: ['Delhi', 'NCR', 'Uttar Pradesh'],
                availableLanguage: ['Hindi', 'English'],
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  opens: '07:00',
                  closes: '20:00',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                }
              }
            ],
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '20:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '18:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '09:00',
                closes: '16:00'
              }
            ],
            sameAs: socialLinks.map(link => link.href),
            medicalSpecialty: [
              'Physical Therapy',
              'Physiotherapy',
              'Sports Medicine',
              'Rehabilitation Medicine',
              'Pain Management',
              'Manual Therapy'
            ],
            serviceType: [
              'Sports Physiotherapy',
              'Manual Therapy', 
              'Rehabilitation Services',
              'Pain Management',
              'Ergonomic Assessment',
              'Preventive Care'
            ],
            priceRange: '₹₹',
            currenciesAccepted: 'INR',
            paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'UPI', 'Insurance'],
            hasCredential: 'Licensed Physical Therapy Practice',
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 28.6762094,
                longitude: 77.0730073
              },
              geoRadius: 50000
            },
            knowsAbout: [
              'Physiotherapy',
              'Physical Rehabilitation',
              'Sports Injuries',
              'Chronic Pain Management',
              'Manual Therapy Techniques',
              'Exercise Therapy'
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '150',
              bestRating: '5',
              worstRating: '1'
            }
          })}
        </script>

        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Enhanced Company Info */}
            <div className="lg:col-span-1" itemScope itemType="https://schema.org/MedicalBusiness">
              <div className="mb-6">
                <a 
                  href="/" 
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg inline-block"
                  aria-label="OptimaPhysio Care - Premier Physiotherapy Clinic Homepage"
                >
                  <h3 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4 transition-all duration-300 hover:scale-105"
                    itemProp="name"
                  >
                    OptimaPhysio Care
                  </h3>
                </a>
                <p className="text-gray-300 leading-relaxed mb-6" itemProp="description">
                  Leading the way in comprehensive physiotherapy care with evidence-based treatments, personalized attention, and innovative rehabilitation techniques. Serving Delhi NCR with excellence since 2020.
                </p>
                
                {/* Enhanced Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 transition-all duration-300 hover:bg-gray-700/80">
                    <Award className="w-4 h-4 text-green-400 mr-2" aria-hidden="true" />
                    <span className="text-sm text-gray-300">Licensed</span>
                  </div>
                  <div className="flex items-center bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 transition-all duration-300 hover:bg-gray-700/80">
                    <Shield className="w-4 h-4 text-blue-400 mr-2" aria-hidden="true" />
                    <span className="text-sm text-gray-300">Insured</span>
                  </div>
                  <div className="flex items-center bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 transition-all duration-300 hover:bg-gray-700/80">
                    <Heart className="w-4 h-4 text-red-400 mr-2" aria-hidden="true" />
                    <span className="text-sm text-gray-300">5⭐ Rated</span>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="flex space-x-4" role="list" aria-label="Follow us on social media">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      to={social.href}
                      rel={social.rel}
                      target="_blank"
                      title={`Follow OptimaPhysio Care on ${social.name} for health tips and updates`}
                      className="group w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      role="listitem"
                      itemProp="sameAs"
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" aria-hidden="true" />
                      <span className="sr-only">Follow us on {social.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <nav role="navigation" aria-label="Footer navigation links">
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        title={link.title}
                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-gray-500 group-hover:text-green-400 transition-all duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Enhanced Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Our Specialties</h4>
              <nav role="navigation" aria-label="Medical services navigation">
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.href}
                        onClick={(e) => openModal(service.modalKey, e)}
                        title={service.title}
                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1 cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-gray-500 group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {service.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Enhanced Contact & Hours */}
            <div itemScope itemType="https://schema.org/MedicalBusiness">
              <h4 className="text-lg font-semibold mb-6 text-white">Contact & Hours</h4>
              
              {/* Enhanced Contact Info */}
              <address className="space-y-4 mb-8 not-italic">
                <div className="flex items-start space-x-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <a 
                      href="https://www.google.com/maps/place/N.K.+physiotherapy+clinic/@28.6762094,77.0704324,17z/data=!3m1!4b1!4m6!3m5!1s0x390d05c2684eded9:0xfa451563c5954bee!8m2!3d28.6762094!4d77.0730073!16s%2Fg%2F11l8g9p8h6?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                      title="Get directions to N.K. Physiotherapy Clinic on Google Maps"
                    >
                      <p className="text-gray-300 font-medium" itemProp="name">N.K. Physiotherapy Clinic</p>
                      <p className="text-gray-300">
                        <span itemProp="addressLocality">Nangloi</span>, 
                        <span itemProp="addressRegion"> Delhi</span> 
                        <span itemProp="postalCode">110041</span>
                      </p>
                    </a>
                    <meta itemProp="addressCountry" content="IN" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="tel:+918447646815" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    itemProp="telephone"
                    title="Call OptimaPhysio Care for appointments and consultations"
                  >
                    +91 8447646815
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="mailto:nikhilkapoor9540@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    itemProp="email"
                    title="Email OptimaPhysio Care for inquiries and appointments"
                  >
                    nikhilkapoor9540@gmail.com
                  </a>
                </div>
              </address>

              {/* Enhanced Office Hours */}
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-blue-400 mr-2" aria-hidden="true" />
                  <h5 className="font-semibold text-white">Office Hours</h5>
                </div>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm" itemProp="openingHours" content={schedule.schema}>
                      <span className="text-gray-300 font-medium">{schedule.day}</span>
                      <span className="text-gray-400">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href="/contact"
                  title="Book your physiotherapy appointment online - Quick and easy scheduling"
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-4 rounded-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 font-medium"
                >
                  <Calendar className="w-4 h-4 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Newsletter Section */}
          {/* <div className="border-t border-gray-800 pt-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-2xl font-bold mb-4 text-white">
                Stay Updated with Expert Health Tips
              </h4>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Subscribe to receive evidence-based physiotherapy advice, exercise tutorials, injury prevention tips, and wellness insights from our expert team.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <label htmlFor="newsletter-email" className="sr-only">Your email address for health updates</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for health tips"
                  required
                  className="flex-1 px-4 py-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/80"
                  aria-describedby="email-description"
                />
                <p id="email-description" className="sr-only">We'll send you monthly health tips and never spam your inbox</p>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Get Health Tips
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-3">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div> */}

          {/* Bottom Section with Enhanced Legal Links */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400" itemProp="copyrightNotice">
                  © 2025 OptimaPhysio Care. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Empowering movement, restoring function, enhancing lives.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <nav className="flex space-x-6 text-sm" role="navigation" aria-label="Legal and policy links">
                  <button 
                    onClick={() => openModal('privacy')}
                    className="text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded underline-offset-4 hover:underline"
                    title="Read our comprehensive privacy policy"
                    type="button"
                  >
                    Privacy Policy
                  </button>
                  <button 
                    onClick={() => openModal('terms')}
                    className="text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded underline-offset-4 hover:underline"
                    title="Read our terms of service and patient agreements"
                    type="button"
                  >
                    Terms of Service
                  </button>
                
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110 flex items-center justify-center z-40 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-bounce"
            aria-label="Scroll to top of page"
            title="Return to top of page"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-pulse" aria-hidden="true" />
          </button>
        )}
      </footer>

      {/* Service Modals */}
      {services.map((service) => (
        <Modal 
          key={service.modalKey}
          isOpen={activeModal === service.modalKey} 
          onClose={closeModal} 
          title={service.name}
        >
          <service.component />
        </Modal>
      ))}

      {/* Legal Modals */}
      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Privacy Policy"
      >
        <PrivacyPolicy />
      </Modal>

      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={closeModal} 
        title="Terms of Service"
      >
        <TermsOfService />
      </Modal>

      <Modal 
        isOpen={activeModal === 'accessibility'} 
        onClose={closeModal} 
        title="Accessibility Statement"
      >
        <AccessibilityStatement />
      </Modal>
    </>
  );
};

export default OptimizedFooter;